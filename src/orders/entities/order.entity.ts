import { Patient } from 'src/patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() 
  id: number;

  @ManyToOne(() => Patient)  
  @JoinColumn({name: "patientId", referencedColumnName: 'id' })
  patient: Patient;

  @Column()
  date: Date;
  
  @ManyToMany((type) => Amenity, (amenity) => amenity.id) 
  
    @JoinTable({
      name: 'orders_amenities',
      joinColumn: { name: 'order_id' }, 
      inverseJoinColumn: { name: 'amenity_id' },
    })
    amenities: Amenity[]; 


  @Column()
  totalCost: number;

}


