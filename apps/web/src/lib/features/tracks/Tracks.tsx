'use client'

import styles from './tracks.module.css'
import { useGetTracksQuery } from './tracks.apiSlice'

export const Tracks = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetTracksQuery(1)
  const tracks = data
  // if (data.length() != 0) {
  //   console.log('fetched data: ', data)
  //   console.log('items: ', data.length())
  // } else {
  //   console.error('hey! there are no tracks in the database')
  // }
  // loading view
  if (isLoading) {
    return (
      <div>
        <h1>Loading track data...</h1>
      </div>
    )
  }

  // error view
  if (isError) {
    return (
      <div>
        <h1>There was an error fetching Track data</h1>
      </div>
    )
  }

  if (isSuccess) {
    // it is possible to have success and load data
    // but that data is empty if there is nothing in the db tracks table
    // const haveTracks = data.length() != 0
    const noTracks = (
      <div>
        <p>
          No tracks in the database, add some via
          http://localhost:3001/api/tracks
        </p>
      </div>
    )
    return (
      <div className={styles.container}>
        <table>
          <thead>
            <th>
              <td>Title</td>
              <td>Artist</td>
              <td>Album</td>
            </th>
          </thead>
          <tbody>
            {tracks.map(
              (track: {
                id: number
                title: string
                artistName: string
                albumName: string
              }) => (
                <tr key={track.id}>
                  <td>{track.title}</td>
                  <td>{track.artistName}</td>
                  <td>{track.albumName}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    )

    return null
  }
}
