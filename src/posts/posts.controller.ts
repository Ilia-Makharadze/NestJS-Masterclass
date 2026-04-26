import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    //dependency injection right here

    private readonly postsService: PostsService,
  ) {}

  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return 'created successfully post request for posts';
  }
  @ApiOperation({ summary: 'Get all posts for a user' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of posts for the specified user.',
  })
  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Patch()
  public updatePost(@Body() patchPostsDto: any) {
    console.log(patchPostsDto);
    return 'updated successfully post request for posts';
  }
}
