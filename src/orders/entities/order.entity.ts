import { Patient } from 'src/patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from 'typeorm';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  order_id: number;

  @ManyToOne(() => Amenity)
  amenity: Amenity;

  @ManyToOne(() => Doctor)
  doctor: Doctor;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column()
  serviceName: string;

  @Column()
  price: number;

  @Column()
  doctorName: string;

  @Column()
  patientName: string;


}


