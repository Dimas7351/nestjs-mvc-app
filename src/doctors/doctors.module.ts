import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Amenity]),],
})
export class DoctorsModule {}
