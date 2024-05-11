import { Column, Entity } from 'typeorm'
import { Base } from '../../lib/base.entity'

export type TrackType = 'album' | 'single' | 'djmix'

@Entity()
export class Track extends Base {
  @Column()
  title: string

  @Column({ name: 'artist_name' })
  artistName: string

  @Column({ name: 'album_name' })
  albumName: string

  @Column({ nullable: true })
  duration?: string

  @Column({ nullable: true })
  number?: number

  @Column({ nullable: true })
  type?: TrackType

  @Column({ name: 'cover_url', nullable: true })
  coverUrl?: string
}
