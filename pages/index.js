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

export default function IndexPage({ colors }) {
  return (
    <>
      <Head>
        <title>Colorrrrr</title>
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
