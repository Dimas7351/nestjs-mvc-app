import { Module } from '@nestjs/common';
import { DoctorsModule } from './authors/doctors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [DoctorsModule, DatasourceModule, PatientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
