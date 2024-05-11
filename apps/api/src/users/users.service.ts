import { Body, Injectable, Logger } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository, UpdateResult } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(@Body() createUserDto: CreateUserDto) {
    // check if user exists
    const existingUser = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    })
    if (existingUser) {
      const message = `user with email: ${existingUser.email} already exists!`
      Logger.debug(message)
      return message
    } else {
      Logger.debug('Did not find an existing user')
    }

    const newUser = new User()
    newUser.email = createUserDto.email
    newUser.name = createUserDto.name
    try {
      Logger.debug('attempting to create new user in db')
      Logger.debug(newUser)
      return this.usersRepository.save(this.usersRepository.create(newUser))
    } catch (error) {
      Logger.error(error)
    }
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find()
  }

  async findOne(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({ id })
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(id, updateUserDto)
  }

  async remove(id: number): Promise<UpdateResult> {
    const user = await this.usersRepository.findOne({ where: { id } })
    return await this.usersRepository.softDelete(user)
  }
}
