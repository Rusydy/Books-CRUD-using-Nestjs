import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BooksModule } from './books/books.module'

// dependencies for mongoDB
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [BooksModule, MongooseModule.forRoot('mongodb://localhost/27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
