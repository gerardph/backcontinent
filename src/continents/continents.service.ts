import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Continents, ContinentsDocument } from './schema/continents.schema';

@Injectable()
export class ContinentsService {
  constructor(
    @InjectModel(Continents.name)
    private continentModel: Model<ContinentsDocument>,
  ) {}
  async getAll(): Promise<Continents[]> {
    return await this.continentModel.find().exec();
  }
  async create(continent: Continents) {
    const newContinent = new this.continentModel(continent);
    return await newContinent.save();
  }
}
