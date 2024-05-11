import { Injectable } from '@nestjs/common'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Artist } from './entities/artist.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    const newArtist = new Artist()
    newArtist.name = createArtistDto.name
    return await this.artistsRepository.save(
      this.artistsRepository.create(newArtist),
    )
  }

  async findAll() {
    return await this.artistsRepository.find()
  }

  async findOne(id: number) {
    return await this.artistsRepository.findOneBy({ id })
  }

  async update(id: number, updateArtistDto: UpdateArtistDto) {
    return await this.artistsRepository.update(id, updateArtistDto)
  }

  async remove(id: number) {
    const artist = await this.artistsRepository.findOneBy({ id })
    return await this.artistsRepository.softDelete(artist)
  }
}
