  import { IsString, IsNumber } from 'class-validator';
import { Doc, doc } from 'prettier';
import { Doctor } from 'src/doctors/entities/doctor.entity';
  import { Order } from 'src/orders/entities/order.entity';
  import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
    Unique
  } from 'typeorm';
  
  @Entity('amenities') 
  @Unique(['id'])
  export class Amenity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id'}) 
    id: number;

    @IsString()
    @Column({}) 
    name: string;

    @IsNumber()
    @Column()
    cost: number;

    @ManyToOne(() => Doctor)  
    @JoinColumn({referencedColumnName: 'id' })
    doctor: Doctor;

    @ManyToMany((type) => Order, (order) => order.amenities)
    @JoinTable({
      name: 'orders_amenities',
      joinColumn: { name: 'amenity_id' }, 
      inverseJoinColumn: { name: 'order_id' },
    })
    orders: Order[]; 
    
  }
