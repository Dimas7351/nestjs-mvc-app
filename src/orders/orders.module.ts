import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity'
import { Amenity } from 'src/amenities/entities/amenity.entity'
import { Patient } from 'src/patients/entities/patient.entity'
import { Order } from './entities/order.entity'
import { PatientsService } from 'src/patients/patients.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { AmenitiesService } from 'src/amenities/amenities.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PatientsService, DoctorsService, AmenitiesService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Amenity, Order, Patient])],
})
export class OrdersModule {}
