import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lang, LangDocument } from './schema/lang.schema';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang.name)
    private langModel: Model<LangDocument>,
  ) {}
  async findByCode(code: string): Promise<Lang> {
    return await this.langModel.findOne({ code: code }).exec();
  }
}
