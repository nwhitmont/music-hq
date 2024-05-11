import { Column, Entity } from 'typeorm'
import { Base } from '../../lib/base.entity'

@Entity()
export class Artist extends Base {
  @Column()
  name: string
}
