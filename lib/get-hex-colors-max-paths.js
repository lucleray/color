export async function getStaticPaths() {
  const paths = []

  for (let i = 0; i < 10000; i++) {
    const hex = Number(i).toString(16)
    const color = `${'0'.repeat(Math.max(6 - hex.length, 0))}${hex}`

    paths.push({ params: { color } })
  }

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { color: `#${params.color}` } }
}
