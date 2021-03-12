const MAX = 10000

function getColorFromI(i) {
  return Number(i).toString(16).padStart(6, '0').slice(-6)
}

export function getStaticPaths() {
  const paths = []

  for (let i = 0; i < MAX; i++) {
    paths.push({ params: { color: getColorFromI(i) } })
  }

  return { paths, fallback: false }
}

export function getStaticProps({ params }) {
  return { props: { color: params.color } }
}

export function getRandomColor() {
  return getColorFromI(Math.floor(Math.random() * MAX))
}
