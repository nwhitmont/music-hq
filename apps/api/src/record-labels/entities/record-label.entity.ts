import { Base } from '../../lib/base.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { Album } from '../../albums/entities/album.entity'

@Entity({})
export class RecordLabel extends Base {
  @Column()
  name: string

  @OneToMany(() => Album, (album) => album.label)
  albums: Album[]
}
