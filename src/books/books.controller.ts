import { Controller, Get, Param, Post, Query, Delete, Body } from '@nestjs/common'
import { query } from 'express'
import { BooksService } from './books.service'
import { CreateBookDTO } from './dto/create-book.dto'

@Controller('books')
export class BooksController {
  constructor(private booksService:BooksService) { }

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks()
    return books
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID)
    return book
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO)
    return book 
  }

  @Delete() // why Delete() has no param?
  async deleteBook(@Query() query) {
    const books = await this.booksService.deleteBook(query.bookID)
    return books
  }
}