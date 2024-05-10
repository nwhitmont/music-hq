import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { TypeOrmExceptionFilter } from './lib/exception-filter'
import { Logger, NestApplicationOptions } from '@nestjs/common'
// import { Logger, LoggerErrorInterceptor } from 'nestjs-pino'

const options: NestApplicationOptions = {
  bufferLogs: true,
  cors: true,
}

async function main() {
  const app = await NestFactory.create(AppModule, options)

  // app.useLogger(app.get(Logger))
  // app.useGlobalInterceptors(new LoggerErrorInterceptor())

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalFilters(new TypeOrmExceptionFilter())
  const port = 3001
  await app.listen(port)
  const host = `http://localhost:${port}/${globalPrefix}`

  Logger.log(`🚀 [MusicHQ-API] is running on: ${host}`)
}
main()
