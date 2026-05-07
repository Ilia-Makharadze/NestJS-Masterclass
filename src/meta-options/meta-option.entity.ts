import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MetaOption {
  @PrimaryColumn()
  id!: number;

  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue!: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updateDate!: Date;
}
