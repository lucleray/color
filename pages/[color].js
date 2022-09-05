import Head from 'next/head'
import { COLOR_LIST } from '../lib/color-list'

export function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=31536000, max-age=86400: 31536000, immutable'
  )

  let color = (params.color || '').toLowerCase().replace(/[\-._]/g, '')

  // short hexadecimal color (eg. fff)
  const smallHexRegex = /^[A-Fa-f0-9]{3}$/
  if (smallHexRegex.test(color)) {
    return { props: { color: `#${color}` } }
  }

  // hexadecimal color (eg. ffffff)
  const hexRegex = /^[A-Fa-f0-9]{6}$/
  if (hexRegex.test(color)) {
    return { props: { color: `#${color}` } }
  }

  // standard color
  const colorListColor = COLOR_LIST[color]
  if (colorListColor) {
    return { props: { color: `#${colorListColor}` } }
  }

  res.statusCode = 404
  return { props: {} }
}

export default function ColorPage({ color }) {
  if (!color) {
    return (
      <>
        <Head>
          <title>Not found</title>
        </Head>
        <div style={{ width: '100%', height: '100vh', background: '#000' }} />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{color}</title>
      </Head>
      <div style={{ width: '100%', height: '100vh', background: `${color}` }} />
    </>
  )
}
