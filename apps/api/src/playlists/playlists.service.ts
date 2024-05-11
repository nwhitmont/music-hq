import { Injectable } from '@nestjs/common'
import { CreatePlaylistDto } from './dto/create-playlist.dto'
import { UpdatePlaylistDto } from './dto/update-playlist.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Playlist } from './entities/playlist.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto) {
    const newPlaylist = new Playlist()
    newPlaylist.name = createPlaylistDto.name
    newPlaylist.tracks = createPlaylistDto.tracks
    newPlaylist.cover = createPlaylistDto.cover || null
    newPlaylist.description = createPlaylistDto.description || null
    return await this.playlistsRepository.save(
      this.playlistsRepository.create(newPlaylist),
    )
  }

  async findAll() {
    return await this.playlistsRepository.find()
  }

  async findOne(id: number) {
    return await this.playlistsRepository.findOneBy({ id })
  }

  async update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return await this.playlistsRepository.update(id, updatePlaylistDto)
  }

  async remove(id: number) {
    const playlist = await this.playlistsRepository.findOneBy({ id })
    return await this.playlistsRepository.softDelete(playlist)
  }
}
