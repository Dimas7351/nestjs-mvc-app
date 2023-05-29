import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique
} from 'typeorm';


@Entity('doctors') 
@Unique(['id'])
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({}) 
  fullname: string;
  @Column({}) 
  specialization: string;
  @OneToMany(() => Amenity, (amenity) => amenity.doctor)
  amenities: Amenity[];

}