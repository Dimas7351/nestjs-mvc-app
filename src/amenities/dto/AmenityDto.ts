import { IsInt, IsString } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  name: string;

  @IsInt()
  cost: number;

  @IsInt()
  doctorId: number;
//   doctors: number[];
}