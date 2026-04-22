import { postType} from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, Min, MinLength, Validate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatePostMetaOptionDto } from "../../meta-options/dtos/create-post-meta-option.dto";
import { ApiProperty } from "@nestjs/swagger";



export class CreatePostDto {
    @ApiProperty({
        example: 'My First Post',
        description: 'The title of the post',
    })
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    title!: string;
    
    @ApiProperty({
        enum: postType,
        example: 'This is the content of my first post.',
        description: 'The content of the post',
    })
    @IsString()
    @MinLength(20)
    @IsNotEmpty()
    excerpt!: string;
    @IsEnum(postType)
    @IsNotEmpty()
    postType!:postType;

    @ApiProperty({
        example: 'my-first-post',
        description: 'The slug of the post, must be in kebab-case',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be in kebab-case'})
    slug!: string;

    @ApiProperty({
        enum: postStatus,
        example: 'published',
        description: 'The status of the post',
    })
    @IsEnum(postStatus)
    @IsNotEmpty()
    status!: postStatus;

    @ApiProperty({
        example: 'This is the content of my first post.',
        description: 'The content of the post',
    })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiProperty({
        example: '{"author":"John Doe","tags":"nestjs, typescript, backend"}',
        description: 'The schema for the post',
    })
    @IsOptional()
    @IsJSON()
    schema?: string;

    @ApiProperty({
        example: 'https://example.com/images/my-first-post.jpg',
        description: 'The URL of the featured image for the post',
    })
    @IsOptional()
    @IsUrl()
    featuredImage?: string;

    @ApiProperty({
        example: '2024-07-01T10:00:00Z',
        description: 'The date and time when the post should be published',
    })
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @ApiProperty({
        example: ['nestjs', 'typescript', 'backend'],
        description: 'The tags for the post',
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];


    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionDto)
    metaOpstions?: CreatePostMetaOptionDto[];
}


