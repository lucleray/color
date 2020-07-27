const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

export async function getStaticPaths() {
  const paths = []

  for (let a of values) {
    for (let b of values) {
      for (let c of values) {
        for (let d of values) {
          paths.push({ params: { color: `${a}${b}${c}${c}${d}${d}` } })
        }
      }
    }
  }

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { color: `#${params.color}` } }
}
