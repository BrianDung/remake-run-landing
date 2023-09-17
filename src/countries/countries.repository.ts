import { EntityRepository, Repository } from 'typeorm';

import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './entities/country.entity';

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
  async saveCountry(item: CreateCountryDto): Promise<Country> {
    console.log('this', this);
    return this.save(item);
  }
}
