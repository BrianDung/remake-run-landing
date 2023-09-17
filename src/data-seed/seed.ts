import { NestFactory } from '@nestjs/core';
import { CountriesModule } from 'src/countries/countries.module';
import { CountriesService } from 'src/countries/countries.service';

async function seeder() {
  const nestFactory = await NestFactory.createApplicationContext(
    CountriesModule,
  );
  console.log('nestFactory', nestFactory);
  const countryService = nestFactory.get(CountriesService);
  try {
    await countryService.createMutipleContries();
    console.log('Seed success');
  } catch (error) {
    console.log('Seed fail', error);
  }
}

seeder();
