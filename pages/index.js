import Link from 'next/link'
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
    <div>
      {colors.map((color) => (
        <Link href={`/${color}`}>
          <a
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
    </div>
  )
}
