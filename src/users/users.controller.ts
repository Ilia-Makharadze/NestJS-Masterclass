import { Controller,Get,Post,Param,Body,Headers,ParseIntPipe,Query, DefaultValuePipe,ValidationPipe,Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {

 constructor(

  private readonly usersService: UsersService,
 ){}

  @Get()
  @Get(':id')
  @ApiOperation({
    summary:'fetches all users or user with specific id',
    description:'get all users or get user with specific id'
  })
  @ApiResponse({
    status:200,
    description:'successfully fetched users',
    
  })
  @ApiQuery({
    name:'limit',
    type:Number,
    required:false,
    description:'number of items to return',
  })
   @ApiQuery({
    name:'page',
    type:Number,
    required:false,
    description:'page of items to return',
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    

    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  public createUser(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any
  ) {
    console.log(createUserDto);
    console.log(headers);

    return "created successfully post request for users";
  }
  @Patch()
  public patchuser(@Body() patchUserDto: PatchUserDto){
    console.log(patchUserDto);
    return "updated successfully patch request for users";
  }
}
