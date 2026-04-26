import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
// import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  ///////////// Dependency Injection of AuthService to use its methods in UsersService
  constructor(
    //injecting userREpository to use its methods in UsersService

    @InjectRepository(User)
    private usersRepository: Repository<User>,

    //injecting config service
    private readonly configService: ConfigService,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

  // This is a placeholder for the UsersService. You can implement your business logic here.
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const environment = this.configService.get<string>('S3_BUCKET');
    console.log(environment);

    return [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.doe@eample.com' },
    ];
  }
  public findOneById(id: string) {
    return {
      id: 1234,
      name: 'John Doe',
      email: 'test@gmail.com',
    };
  }
}
