const MAX = 10

export async function getStaticPaths() {
  const paths = []

  for (let i = 0; i < MAX; i++) {
    paths.push({
      params: {
        color: Number(i).toString(16).padStart(6, '0'),
      },
    })
  }

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { color: `#${params.color}` } }
}
