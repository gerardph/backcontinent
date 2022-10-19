import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Search } from './dto/search';
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
  async search(search: Search): Promise<Continents[]> {
    let criteria = {};
    if (search.kw != '') {
      criteria = { name: { $regex: search.kw.toUpperCase() } };
    }
    const query = this.continentModel.find(criteria);
    if (search.lang != '') {
      query.where('langue').in([search.lang]);
    }
    if (search.code != '') {
      query.where('code').equals(search.code.toUpperCase());
    }
    return await query.exec();
  }
}
