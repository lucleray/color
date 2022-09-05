import { COLOR_LIST } from '../lib/color-list'

export function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let color

  if (req.url && req.url[0] === '/') {
    color = req.url
      .slice(1)
      .toLowerCase()
      .replace(/[\-._]/g, '')
  }

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

  return { props: {} }
}

export default function ColorPage({ color }) {
  if (!color) {
    return (
      <div style={{ width: '100%', height: '100vh', background: '#000' }} />
    )
  }

  return (
    <div style={{ width: '100%', height: '100vh', background: `${color}` }} />
  )
}
