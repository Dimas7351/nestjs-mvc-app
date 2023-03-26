import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PatientsModule } from './patients/patients.module';
import { AmenitiesModule } from './amenities/amenities.module';

@Module({
  imports: [DoctorsModule, DatasourceModule, PatientsModule, AmenitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
