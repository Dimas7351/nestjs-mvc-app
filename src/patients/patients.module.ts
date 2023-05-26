import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity'
import { Order } from 'src/orders/entities/order.entity';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Patient, Order])],
})
export class PatientsModule {}