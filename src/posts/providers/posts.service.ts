import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    console.log(userId);
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        id: 1,
        title: 'First Post',
      },
    ];
  }
}
