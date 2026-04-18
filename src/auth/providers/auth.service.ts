import { Injectable,forwardRef,Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService
    ) {

    }
    public login(email: string, password: string) {
        const user= this.usersService.findOneById('1234');
        //check user exists database
        //login
        return "sample token";

    }
    public isAuth(token: string) {
        //check token is valid
        return true;    
    }

}
