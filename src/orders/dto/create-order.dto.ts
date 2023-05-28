import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  patientId: number;

  @IsInt()
  amenityId: number;

  @IsInt()
  doctorId: number;
}