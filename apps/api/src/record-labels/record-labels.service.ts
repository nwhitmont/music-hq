import { Injectable } from '@nestjs/common'
import { CreateRecordLabelDto } from './dto/create-record-label.dto'
import { UpdateRecordLabelDto } from './dto/update-record-label.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { RecordLabel } from './entities/record-label.entity'

@Injectable()
export class RecordLabelService {
  constructor(
    @InjectRepository(RecordLabel)
    private recordLabelsRepository: Repository<RecordLabel>,
  ) {}

  async create(createRecordLabelDto: CreateRecordLabelDto) {
    const newRecordLabel = new RecordLabel()
    newRecordLabel.name = createRecordLabelDto.name
    return await this.recordLabelsRepository.save(
      this.recordLabelsRepository.create(newRecordLabel),
    )
  }

  async findAll() {
    return await this.recordLabelsRepository.find()
  }

  async findOne(id: number) {
    return await this.recordLabelsRepository.findOneBy({ id })
  }

  async update(id: number, updateRecordLabelDto: UpdateRecordLabelDto) {
    return await this.recordLabelsRepository.update(id, updateRecordLabelDto)
  }

  async remove(id: number) {
    const recordLabel = await this.recordLabelsRepository.findOneBy({ id })
    return await this.recordLabelsRepository.softDelete(recordLabel)
  }
}
