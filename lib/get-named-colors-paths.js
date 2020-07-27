import namedColors from 'color-name-list'
import slugify from '@sindresorhus/slugify'

export async function getStaticPaths() {
  return {
    paths: namedColors.map((color) => ({
      params: { color: slugify(color.name) },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const color = namedColors.find(
    (color) => params.color === slugify(color.name)
  )

  return { props: { color: color.hex } }
}
