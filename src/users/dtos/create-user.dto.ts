import { IsNotEmpty,IsString,IsEmail,MinLength ,MaxLength, Matches} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()    
    @MinLength(3)
    @MaxLength(10)   
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    password!: string;
}