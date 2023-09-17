import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CountryDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  code: string;

  @Expose()
  @ApiProperty()
  created_at: string;
}
