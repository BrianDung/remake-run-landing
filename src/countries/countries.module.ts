import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';

import { CountriesController } from './countries.controller';
import { CountryRepository } from './countries.repository';
import { CountriesService } from './countries.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([CountryRepository])],
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [CountriesService],
})
export class CountriesModule {}
