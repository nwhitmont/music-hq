import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm'
import { Album } from '../albums/entities/album.entity'
import { Artist } from '../artists/entities/artist.entity'
import { Track } from '../tracks/entities/track.entity'

@EventSubscriber()
export class TracksEventSubscriber implements EntitySubscriberInterface<Track> {
  listenTo() {
    return Track
  }

  beforeInsert(event: InsertEvent<Track>): void | Promise<any> {
    // // Logger.log(event)
    // TODO
  }
  beforeUpdate(event: UpdateEvent<Track>): void | Promise<any> {
    // // Logger.log(event)
    // TODO
  }

  afterInsert(event: InsertEvent<Track>): void | Promise<any> {
    // Logger.debug('track inserted into db')
    // Logger.debug('event:')
    // // Logger.log(event)
    // Logger.debug('after log event')
    // update album
  }

  afterUpdate(event: UpdateEvent<Track>): void | Promise<any> {
    // // Logger.log(event)
    // TODO
  }
}

@EventSubscriber()
export class ArtistsEventSubscriber
  implements EntitySubscriberInterface<Artist>
{
  listenTo() {
    return Track
  }

  beforeInsert(event: InsertEvent<Artist>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }
  beforeUpdate(event: UpdateEvent<Artist>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }

  afterInsert(event: InsertEvent<Artist>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }

  afterUpdate(event: UpdateEvent<Artist>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }
}

@EventSubscriber()
export class AlbumsEventSubscriber implements EntitySubscriberInterface<Album> {
  listenTo() {
    return Track
  }

  beforeInsert(event: InsertEvent<Album>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }
  beforeUpdate(event: UpdateEvent<Album>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }

  afterInsert(event: InsertEvent<Album>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }

  afterUpdate(event: UpdateEvent<Album>): void | Promise<any> {
    // Logger.log(event)
    // TODO
  }
}
