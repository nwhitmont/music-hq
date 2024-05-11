import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { EntityNotFoundError, QueryFailedError, TypeORMError } from 'typeorm'

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    let statusCode: number
    let message: string

    switch (exception.constructor) {
      case HttpException:
        statusCode = (exception as HttpException).getStatus()
        message = (exception as HttpException).message
        break
      case EntityNotFoundError:
        statusCode = HttpStatus.NOT_FOUND
        message = 'Resource not found'
        break
      case QueryFailedError:
        statusCode = HttpStatus.UNPROCESSABLE_ENTITY
        //
        if ((exception as NodeJS.ErrnoException).code === 'ER_DUP_ENTRY') {
          message = 'Duplicate entry'
        } else {
          message = 'Database query failed'
        }
        break
      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR
        message = 'Internal server error'
    }

    response.status(statusCode).json({
      statusCode,
      message,
    })
  }
}
