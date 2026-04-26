import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionDto } from './../dtos/create-post-meta-option.dto';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostMetaOptionDto: CreatePostMetaOptionDto) {
    let metaOption = this.metaOptionsRepository
      .create
      //    createPostMetaOptionDto,
      ();
    console.log(createPostMetaOptionDto);
    return await this.metaOptionsRepository.save(metaOption);
  }
}
