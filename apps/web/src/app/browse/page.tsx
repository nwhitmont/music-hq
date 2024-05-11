'use client'

import { Tracks } from '../../lib/features/tracks/Tracks'

// route: /browse
export default function Browse() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <h1>Browse Music</h1>
          <Tracks />
        </div>
      </div>
    </div>
  )
}
