import { IsArray, IsInt } from 'class-validator';
import { Doctor } from 'src/doctors/entities/doctor.entity';

export class CreateOrderDto {
  @IsInt()
  patientId: number;

  @IsArray()
  amenities: number[];
}