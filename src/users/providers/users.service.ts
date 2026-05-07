import { Injectable, Inject, forwardRef, RequestTimeoutException, BadRequestException } from '@nestjs/common';
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

   let existingUser: User | null = null;

    try{
      existingUser=await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException('Unable to process for request', {
          description: 'error connection to the database',
        })

    }

if(existingUser){
  throw new BadRequestException(
    'already exsits this email'
  )
}



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

  public async createMany(createUsersDto: CreateUserDto[]) {
    const queryRunner = this.usersRepository.manager.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const users: User[] = [];

      for (const userDto of createUsersDto) {
        // check if email already exists
        const existingUser = await queryRunner.manager.findOne(User, {
          where: { email: userDto.email },
        });

        if (existingUser) {
          throw new BadRequestException(
            `User with email ${userDto.email} already exists`,
          );
        }

        const newUser = queryRunner.manager.create(User, userDto);
        const savedUser = await queryRunner.manager.save(newUser);

        users.push(savedUser);
      }

      await queryRunner.commitTransaction();
      return users;

    } catch (error) {
      await queryRunner.rollbackTransaction();

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new RequestTimeoutException('Failed to create users', {
        description: 'Database transaction failed',
      });

    } finally {
      await queryRunner.release();
    }
  }
}
