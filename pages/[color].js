export { getStaticPaths, getStaticProps } from '../lib/get-named-colors-paths'

export default function ColorPage({ color }) {
  return <div style={{ width: '100%', height: '100vh', background: color }} />
}
