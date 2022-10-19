import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContinentsDocument = Continents & Document;

@Schema({ collection: 'continents' })
export class Continents {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  langue: string[];
}

export const ContinentsSchema = SchemaFactory.createForClass(Continents);
