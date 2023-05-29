import { IsArray, IsInt, IsString } from 'class-validator';
import { Doctor } from 'src/doctors/entities/doctor.entity';

export class CreateOrderDto {
  @IsInt()
  patientId: number;

  date: Date;

  @IsArray()
  amenities: number[];
}