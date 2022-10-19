import { IsString } from 'class-validator';

export class Search {
  @IsString()
  code = '';

  @IsString()
  lang = '';

  @IsString()
  kw = '';
}
