import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        //dependency injection right here

        private readonly postsService: PostsService
    ) {}

    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
        return "created successfully post request for posts";
    }
    @Get('/:userId')
    public getPosts(@Param('userId') userId: string) {
        return this.postsService.findAll(userId);
    }
}
