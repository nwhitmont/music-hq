'use client'

import EditAlbumForm from './EditAlbum.form'
import { Tracks } from '../../../src/lib/features/tracks/Tracks'

export default function Collection() {
  return (
    <div>
      <div>
        <h1>Tracks loading test area</h1>
        <Tracks />
        <h3>Form test</h3>
        <EditAlbumForm />
      </div>
    </div>
  )
}
