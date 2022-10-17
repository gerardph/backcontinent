import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentsModule } from './continents/continents.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/contdb'),
    ContinentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
