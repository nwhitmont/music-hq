import { Track } from "../../tracks/entities/track.entity"

export class CreatePlaylistDto {
  name: string
  tracks: Track[]
  cover?: string
  description?: string
}
