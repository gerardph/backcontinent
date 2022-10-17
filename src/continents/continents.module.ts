import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContinentsController } from './continents.controller';
import { ContinentsService } from './continents.service';
import { ContinentsSchema } from './schema/continents.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Continents',
        schema: ContinentsSchema,
        collection: 'Continents',
      },
    ]),
  ],
  controllers: [ContinentsController],
  providers: [ContinentsService],
})
export class ContinentsModule {}
