import { JsonTransformer } from '@anchan828/typeorm-transformers'
import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { Artist } from '../../artists/entities/artist.entity'
import { Base } from '../../lib/base.entity'
import { RecordLabel } from '../../record-labels/entities/record-label.entity'
import { Track } from '../../tracks/entities/track.entity'

export enum ReleaseType {
  ALBUM = 'album',
  SINGLE = 'single',
  DJMIX = 'djmix',
}
@Entity()
export class Album extends Base {
  @OneToOne(() => Artist, { cascade: true })
  artist: Artist

  @OneToOne(() => RecordLabel)
  label?: RecordLabel

  @Column()
  title: string

  @OneToMany(() => Track, (track) => track.id)
  tracks: Track[]

  @Column()
  cover?: string // url

  @Column()
  description?: string

  @Column({ enum: ReleaseType })
  type?: ReleaseType // does this really matter? maybe for grouping in the ui later on artist page

  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    transformer: new JsonTransformer<string[]>(),
  })
  genres?: string // stringified JSON string[]
}
