import { Controller, Get } from '@nestjs/common';
import { ContinentsService } from './continents.service';

@Controller('continents')
export class ContinentsController {
  constructor(private continentsService: ContinentsService) {}
  @Get()
  async getAll() {
    return await this.continentsService.getAll();
  }
}
