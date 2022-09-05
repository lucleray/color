import Link from 'next/link'
import React from 'react'

function getRandomColor() {
  const i = Math.floor(Math.random() * Math.pow(16, 6))
  return Number(i).toString(16).padStart(6, '0').slice(-6)
}

export function getServerSideProps() {
  return { props: { color: getRandomColor() } }
}

export default function IndexPage({ color }) {
  const [colorState, shuffle] = React.useReducer(getRandomColor, color)

  return (
    <div>
      <Link href={`/${colorState}`}>
        <a>#{colorState}</a>
      </Link>{' '}
      - <button onClick={shuffle}>Shuffle</button>
    </div>
  )
}
