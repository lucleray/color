import Link from 'next/link'
import React from 'react'
import { getColorFromInt, TOTAL_COLORS } from '../lib'

export default function IndexPage() {
  function getRandomColor() {
    return getColorFromInt(Math.floor(Math.random() * TOTAL_COLORS))
  }

  const [color, shuffle] = React.useReducer(
    getRandomColor,
    null,
    getRandomColor
  )

  return (
    <div>
      <Link href={`/${color}`}>
        <a>#{color}</a>
      </Link>{' '}
      - <button onClick={shuffle}>Shuffle</button>
    </div>
  )
}
