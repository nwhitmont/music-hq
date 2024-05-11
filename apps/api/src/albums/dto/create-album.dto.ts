import { CreateArtistDto } from '../../artists/dto/create-artist.dto'
import { ReleaseType } from '../entities/album.entity'
import { CreateTrackDto } from '../../tracks/dto/create-track.dto'

export class CreateAlbumDto {
  title: string
  artist: CreateArtistDto
  tracks: CreateTrackDto[]
  discogs?: string
  cover?: string
  description?: string
  type?: ReleaseType
  genres?: string[]
}
