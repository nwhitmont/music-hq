import { Injectable } from '@nestjs/common'
import { CreateTrackDto } from './dto/create-track.dto'
import { UpdateTrackDto } from './dto/update-track.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Track } from './entities/track.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private tracksRepository: Repository<Track>,
  ) {}

  async create(createTrackDto: CreateTrackDto) {
    return await this.tracksRepository.save(
      this.tracksRepository.create(createTrackDto),
    )
  }

  async findAll() {
    return this.tracksRepository.find()
  }

  async findOne(id: number) {
    return await this.tracksRepository.findOneBy({ id })
  }

  async update(id: number, updateTrackDto: UpdateTrackDto) {
    return await this.tracksRepository.update(id, updateTrackDto)
  }

  async remove(id: number) {
    return `This action removes a #${id} track`
  }
}
