import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [DatasourceModule],
})
export class DoctorsModule {}