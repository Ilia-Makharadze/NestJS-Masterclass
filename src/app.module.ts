import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Type } from 'class-transformer';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
//User created modules


@Module({
  imports: [UsersModule, PostsModule, AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({

        type: 'postgres',
        // entities: [User],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'postgres',
        synchronize: true,
        autoLoadEntities: true,
      }),
  }),
    TagsModule,
    MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
