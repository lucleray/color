import Link from 'next/link'
import { useReducer } from 'react'

import { getRandomColor } from '../lib/get-hex-colors-paths'

export default function IndexPage() {
  const [color, shuffle] = useReducer(getRandomColor, null, getRandomColor)

  return (
    <div>
      <Link href={`/${color}`}>
        <a>#{color}</a>
      </Link>{' '}
      - <button onClick={shuffle}>Shuffle</button>
    </div>
  )
}
