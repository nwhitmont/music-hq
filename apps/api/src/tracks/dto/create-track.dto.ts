import { TrackType } from '../entities/track.entity'

export class CreateTrackDto {
  title: string
  artistName: string
  albumName: string
  duration?: string
  number?: number
  type?: TrackType
  coverUrl?: string
}
