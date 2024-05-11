'use client'
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'
import styles from './tracks.module.css'
import { useGetTracksQuery } from './tracks.apiSlice'

export const Tracks = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetTracksQuery(1)
  const tracks = data
  console.log('fetched data: ', data)

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
                id: Key | null | undefined
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined
                artistName:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined
                albumName:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined
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
  }

  return null
}
