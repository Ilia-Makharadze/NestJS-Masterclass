import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTagDto{
    @ApiResponseProperty()
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @MaxLength(256)
    name!: string;

    @ApiProperty({
        example: 'my-first-post',
        description: 'The slug of the post, must be in kebab-case',
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug must be in kebab-case'})
    slug!: string;

    @ApiResponseProperty()
    @IsOptional()
    @IsString()
    description?: string;

     @ApiResponseProperty()
    @IsOptional()
    @IsJSON()
    schema?: string;

     
    @ApiResponseProperty()
    @IsOptional()   
    @IsUrl()
    @MaxLength(102)
    featuredImageUrl?: string;
}