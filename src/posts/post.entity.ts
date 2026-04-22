import { Column, Entity, OneToOne, PrimaryGeneratedColumn,JoinColumn } from "typeorm";
import { postType } from "./enums/postType.enum";
import { CreatePostMetaOptionDto } from "../meta-options/dtos/create-post-meta-option.dto";
import { MetaOption } from "../meta-options/meta-option.entity";



@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    title!: string;

    @Column({
        type: 'enum',
        enum: postType,
        nullable: false
    })
    postType!: postType;

    @Column({
        type: 'varchar',
        length: 255,    
        nullable: false,
        unique: true
    })
    slug! : string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true
    })
     excerpt?: string;

    @Column({
        type: 'text',
        nullable: true
    })
    content?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true
    })
    schema?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true
    })
    featuredImageUrl?: string;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    publishOn?: Date;
   
   @OneToOne(()=>MetaOption)
   @JoinColumn()
    metaOptions?: MetaOption;
   
    tags?: string[];

   
}