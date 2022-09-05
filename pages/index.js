import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

function getRandomColor() {
  const i = Math.floor(Math.random() * Math.pow(16, 6))
  return Number(i).toString(16).padStart(6, '0').slice(-6)
}

export function getServerSideProps() {
  const colors = []
  for (let i = 0; i < 1_000; i++) {
    colors.push(getRandomColor())
  }

  return { props: { colors } }
}

function getFavicon(colors) {
  const mask = `<mask id="myMask"><circle cx='5' cy='5' r='6' fill='white'/></mask>`
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'>${mask}<g mask='url(#myMask)'>${colors
    .slice(0, 100)
    .map(
      (color, i) =>
        `<rect x='${i % 10}' y='${Math.floor(
          i / 10
        )}' width='1' height='1' fill='#${color}'/>`
    )
    .join('')}</g></svg>`
  return encodeURIComponent(svg)
}

export default function IndexPage({ colors }) {
  return (
    <>
      <Head>
        <title>Colorrrrr</title>
        <link rel="icon" href={`data:image/svg+xml,${getFavicon(colors)}`} />
      </Head>
      {colors.map((color) => (
        <Link href={`/${color}`}>
          <a
            aria-label={`Color #${color}`}
            style={{
              width: 100,
              height: 100,
              display: 'block',
              background: `#${color}`,
              margin: 0,
              padding: 0,
              float: 'left',
            }}
          ></a>
        </Link>
      ))}
    </>
  )
}
