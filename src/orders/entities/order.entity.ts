import { Patient } from 'src/patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from 'typeorm';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;

  @ManyToOne(() => Amenity)
  @JoinColumn({name: "amenity", referencedColumnName: 'id' })
  amenity: Amenity;

  @ManyToOne(() => Doctor)
  @JoinColumn({name: "doctor", referencedColumnName: 'id' })
  doctor: Doctor;

  @ManyToOne(() => Patient)
  @JoinColumn({name: "patient", referencedColumnName: 'id' })
  patient: Patient;

  @Column()
  price: number;

  // @Column()
  // serviceName: string;

  // @Column()
  // doctorName: string;

  // @Column()
  // patientName: string;


}


