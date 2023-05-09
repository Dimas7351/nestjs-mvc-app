import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { AmenitiesController } from './amenities.controller';
import { AmenitiesService } from './amenities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenity } from './entities/amenity.entity'
import { Doctor } from 'src/doctors/entities/doctor.entity'

@Module({
  controllers: [AmenitiesController],
  providers: [AmenitiesService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Amenity,Doctor])],
})
export class AmenitiesModule {}
