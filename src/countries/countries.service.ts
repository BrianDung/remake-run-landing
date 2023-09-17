import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { countries } from 'src/data-seed/countries';
import { PaginationParamsDto } from 'src/shared/dtos/pagination-params.dto';

import { CountryRepository } from './countries.repository';
import { CountryDto } from './dto/country.dto';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(private countryRepository: CountryRepository) {}
  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.saveCountry(createCountryDto);
  }

  async findAll(query: PaginationParamsDto) {
    const [data, count] = await this.countryRepository.findAndCount({
      where: {},
      take: query.limit,
      skip: query.offset,
    });
    const countryOutput = plainToClass(CountryDto, data, {
      excludeExtraneousValues: true,
    });
    return {
      data: countryOutput,
      count,
    };
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
    const promise = countries.map((item, index) =>
      this.create({
        ...item,
        id: index + 1,
      }),
    );
    try {
      const result = await Promise.all(promise);
      return true;
    } catch (error) {
      return false;
    }
  }
}
