import {
  // SeedCreateCommand,
  Seeder,
  SeederFactoryManager,
} from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Track } from '@api/src/tracks/entities/track.entity'
import { CreateTrackDto } from '../../tracks/dto/create-track.dto'

export default class TracksSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    await dataSource.query('TRUNCATE "track" RESTART IDENTITY;')

    const repository = dataSource.getRepository(Track)
    const seedTracks: CreateTrackDto[] = [
      // dj mix tracks
      {
        title: 'Balearic mix 2023',
        artistName: 'Nick Warren',
        albumName: 'Mixcloud DJ Sets',
        type: 'djmix',
        duration: '1:43:27',
      },
      // single tracks
      {
        title: 'Purrington OG (Laser Tag mix)',
        artistName: 'Lady Murderclaws',
        albumName: 'B1T3.U',
        type: 'single',
        duration: '3:54',
      },
      // album tracks
      {
        title: 'Magical Mystery Tour 1',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 1,
      },
      {
        title: 'Magical Mystery Tour 2',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 2,
      },
      {
        title: 'Magical Mystery Tour 3',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 3,
      },
      {
        title: 'Magical Mystery Tour 4',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 4,
      },
      {
        title: 'Magical Mystery Tour 5',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 5,
      },
      {
        title: 'Magical Mystery Tour',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 6,
      },
      {
        title: 'Magical Mystery Tour 1',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 7,
      },
      {
        title: 'Magical Mystery Tour 2',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 8,
      },
      {
        title: 'Magical Mystery Tour 3',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 9,
      },
      {
        title: 'Magical Mystery Tour 4',
        artistName: 'The Beatles',
        albumName: 'Magical Mystery Tour',
        type: 'album',
        duration: '3:54',
        number: 10,
      },
    ]
    await repository.insert(seedTracks)
  }
}

// import { CreateAlbumDto } from "../../albums/dto/create-album.dto"
import { CreateArtistDto } from '../../artists/dto/create-artist.dto'
import { CreateRecordLabelDto } from '../../record-labels/dto/create-record-label.dto'

// Artists
const TheBeatles: CreateArtistDto = {
  name: 'The Beatles',
}
const LedZeppelin: CreateArtistDto = {
  name: 'Led Zeppelin',
}
// Record Labels
const capitolRecords: CreateRecordLabelDto = {
  name: 'Capitol Records',
}
const appleRecords: CreateRecordLabelDto = {
  name: 'Apple Records',
}
// Releases
const magicalMysteryTourTitle = 'Magical Mystery Tour'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const magicalMysteryTourAlbum = {
  artist: TheBeatles, // shoud we just pass in a sting here and create artist if not exists?
  title: magicalMysteryTourTitle,
  discogs:
    'https://www.discogs.com/master/54463-The-Beatles-Magical-Mystery-Tour',
  cover:
    'https://i.discogs.com/5rwh2E75lUD011G_luz1V-5Uou4HjCEsxUcg-RgxukY/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2NDI5/Mi0xNDM0NjY1MjM4/LTM3MDIuanBlZw.jpeg',
  tracks: [
    {
      number: 1,
      title: 'Magical Mystery Tour',
      duration: '2:48',
    },
    {
      number: 2,
      title: 'The Fool On The Hill',
      duration: '3:00',
    },
    {
      number: 3,
      title: 'Flying',
      duration: '2:16',
    },
    {
      number: 4,
      title: 'Blue Jay Way',
      duration: '3:50',
    },
    {
      number: 5,
      title: 'Your Mother Should Know',
      duration: '2:33',
    },
    {
      number: 6,
      title: 'I Am The Walrus',
      duration: '4:35',
    },
    {
      number: 7,
      title: 'Hello Goodbye',
      duration: '3:24',
    },
    {
      number: 8,
      title: 'Strawberry Fields Forever',
      duration: '4:05',
    },
    {
      number: 9,
      title: 'Penny Lane',
      duration: '2:57',
    },
    {
      number: 9,
      title: "Baby You're A Rich Man",
      duration: '3:07',
    },
    {
      number: 10,
      title: 'All You Need Is Love',
      duration: '3:57',
    },
  ],
}

export const ArtistsSeed: CreateArtistDto[] = [TheBeatles, LedZeppelin]
export const RecordLabelsSeed: CreateRecordLabelDto[] = [
  capitolRecords,
  appleRecords,
]
