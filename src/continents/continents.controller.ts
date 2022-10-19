import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { Search } from './dto/search';
import { Continents } from './schema/continents.schema';

@Controller('continents')
export class ContinentsController {
  constructor(private continentsService: ContinentsService) {}
  @Get()
  async getAll() {
    return await this.continentsService.getAll();
  }
  @Post()
  async createContinents(@Body() continent: Continents) {
    const newBook = await this.continentsService.create(continent);
    return newBook;
  }
  @Get('search')
  @UsePipes(new ValidationPipe({ transform: true }))
  async search(@Query() search: Search) {
    console.log(search.code);
    console.log(search.kw);
    console.log(search.lang);
    return await this.continentsService.search(search);
  }
}
