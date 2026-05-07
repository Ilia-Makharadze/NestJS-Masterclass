import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName!: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName!: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  @Exclude()
  email!: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  password!: string;
}
