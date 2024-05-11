import { Body, Injectable } from '@nestjs/common'
import { CreateAlbumDto } from './dto/create-album.dto'
import { UpdateAlbumDto } from './dto/update-album.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Album } from './entities/album.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumsRepository: Repository<Album>,
  ) {}

  async create(@Body() createAlbumDto: CreateAlbumDto) {
    const newAlbum = new Album()
    newAlbum.title = createAlbumDto.title
    newAlbum.cover = createAlbumDto.cover || null
    newAlbum.description = createAlbumDto.description || null

    return await this.albumsRepository.save(
      this.albumsRepository.create(newAlbum),
    )
  }

  async findAll(): Promise<Album[]> {
    return await this.albumsRepository.find()
  }

  async findOne(id: number): Promise<Album> {
    return await this.albumsRepository.findOneBy({ id })
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return await this.albumsRepository.update(
      id,
      updateAlbumDto as unknown as Album,
    )
  }

  async remove(id: number) {
    const album = await this.albumsRepository.findOneBy({ id })
    return await this.albumsRepository.softDelete(album)
  }
}
