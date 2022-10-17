import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContinentsService } from './continents.service';
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
}
