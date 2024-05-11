import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { LoggerModule } from 'nestjs-pino'
// modules
import { UsersModule } from './users/users.module'
import { ArtistsModule } from './artists/artists.module'
import { PlaylistModule } from './playlists/playlists.module'
import { RecordLabelsModule } from './record-labels/record-labels.module'
import { TracksModule } from './tracks/tracks.module'
import { AlbumsModule } from './albums/albums.module'
// event subscribers
import {
  AlbumsEventSubscriber,
  ArtistsEventSubscriber,
  TracksEventSubscriber,
} from './lib/event-subscribers'
// entities
import { Album } from './albums/entities/album.entity'
import { Artist } from './artists/entities/artist.entity'
import { Playlist } from './playlists/entities/playlist.entity'
import { RecordLabel } from './record-labels/entities/record-label.entity'
import { Track } from './tracks/entities/track.entity'
import { User } from './users/entities/user.entity'
import { IncomingMessage } from 'http'
import { ServerResponse } from 'http'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        applicationName: 'music_api_nest_app',
        type: 'postgres',
        port: 5432,
        host: 'localhost',
        username: 'spongebob',
        password: 'squarepants',
        database: 'music_hq',
        entities: [Album, Artist, Playlist, RecordLabel, Track, User],
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
        subscribers: [
          ArtistsEventSubscriber,
          AlbumsEventSubscriber,
          TracksEventSubscriber,
        ],
      }),
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: (
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          req: IncomingMessage,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          res: ServerResponse<IncomingMessage>
        ) => ({
          context: 'HTTP',
        }),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    AlbumsModule,
    ArtistsModule,
    PlaylistModule,
    RecordLabelsModule,
    TracksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
