import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/doctors/entities/doctor.entity'
import { Amenity } from 'src/amenities/entities/amenity.entity'
import { Patient } from 'src/patients/entities/patient.entity'
import { Order } from './entities/order.entity'

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Doctor, Amenity, Order, Patient])],
})
export class OrdersModule {}
