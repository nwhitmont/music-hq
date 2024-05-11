import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { PlaylistsService } from './playlists.service'
import { CreatePlaylistDto } from './dto/create-playlist.dto'
import { UpdatePlaylistDto } from './dto/update-playlist.dto'

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(createPlaylistDto)
  }

  @Get()
  findAll() {
    return this.playlistService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ) {
    return this.playlistService.update(+id, updatePlaylistDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(+id)
  }
}
