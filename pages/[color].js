import { getColorFromInt, TOTAL_COLORS } from '../lib'

export function getStaticPaths() {
  const paths = []

  for (let i = 0; i < TOTAL_COLORS; i++) {
    paths.push({ params: { color: getColorFromInt(i) } })
  }

  return { paths }
}

export function getStaticProps({ params }) {
  return {
    props: { color: params.color },
    revalidate: 10,
  }
}

export default function ColorPage({ color }) {
  return (
    <div style={{ width: '100%', height: '100vh', background: `#${color}` }} />
  )
}
