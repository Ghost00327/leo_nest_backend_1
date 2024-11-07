import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';



@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
