import { Injectable,Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';



@Injectable()
export class UsersService {
constructor(

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
) {}

  // This is a placeholder for the UsersService. You can implement your business logic here.
  public findAll(getUsersParamDto: GetUsersParamDto, 
    limit: number,
     page: number) {
        const isAuth= this.authService.isAuth('sample token');
        console.log(isAuth);

    return[
        {   id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        } ,
        {   id: 2,
            name: 'Jane Smith',
            email: 'jane.doe@eample.com'
        }  
    ]
  }
  public findOneById(id: string) {
    return {
        id: 1234,
        name: 'John Doe',
        email: 'test@gmail.com'
    }    
}   

}