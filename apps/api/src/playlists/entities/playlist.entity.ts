import { Entity, Column, OneToMany } from 'typeorm'
import { Base } from '../../lib/base.entity'
import { Track } from '../../tracks/entities/track.entity'

@Entity()
export class Playlist extends Base {
  @Column()
  name: string

  @OneToMany(() => Track, (track) => track.id)
  tracks?: Track[]

  @Column()
  cover?: string // url to cover image

  @Column()
  description?: string
}
