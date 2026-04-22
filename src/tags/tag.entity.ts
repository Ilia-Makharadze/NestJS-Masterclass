import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true
    })
    name!: string; 
    
    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    slug!: string;

 
    @Column({
        type: 'text',
        nullable: true,
    })
    description!: string;

    
    @Column({
        type: 'text',
        nullable: true,
    })
    schema!: string;

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true,
    })
    featuredImageUrl?: string;
//https://typeorm.io/docs/query-builder/select-query-builder


    @CreateDateColumn()
    createDate!: Date;

    @UpdateDateColumn()
    updateDate!: Date;
    
    @DeleteDateColumn()
    deletedAt!: Date;

}