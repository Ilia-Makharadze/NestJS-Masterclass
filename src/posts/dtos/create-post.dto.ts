import { postType} from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, Min, MinLength } from "class-validator";



export class CreatePostDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    title!: string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType!:postType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be in kebab-case'})
    slug!: string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status!: postStatus;

    @IsString()
    @IsOptional()
    content?: string;

    @IsOptional()
    @IsJSON()
    schema?: string;

    @IsOptional()
    @IsUrl()
    featuredImage?: string;

    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];

    metaOpstions?: [{key: 'sidebarEnabled'; value: true}];
}