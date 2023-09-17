import { Injectable } from '@nestjs/common';
import { countries } from 'src/data-seed/countries';

import { CountryRepository } from './countries.repository';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(private countryRepository: CountryRepository) {}
  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.saveCountry(createCountryDto);
  }

  findAll() {
    return countries as any;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }

  async createMutipleContries(): Promise<boolean> {
    console.log('go');
    const promise = countries.map((item, index) =>
      this.create({
        ...item,
        id: index + 1,
      }),
    );
    try {
      const result = await Promise.all(promise);
      console.log('RESULT CREATE MULTIPLE', result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
