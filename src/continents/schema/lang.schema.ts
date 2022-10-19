import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LangDocument = Lang & Document;

@Schema({ collection: 'langue' })
export class Lang {
  @Prop()
  code: string;

  @Prop()
  name: string;
}

export const LangSchema = SchemaFactory.createForClass(Lang);
