import { Module } from '@nestjs/common';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MetaOptionsController],
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaOptionsModule {}
