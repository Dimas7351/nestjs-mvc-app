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


@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
@Unique(['id'])
export class Doctor {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) 
  fullname: string;
  @Column({}) 
  specialization: string;
  // @OneToMany(() => Order, (order) => order.doctor)
  // orders: Order[];
  @OneToMany(() => Amenity, (amenity) => amenity.doctor)
  amenities: Amenity[];
//   @ManyToMany((type) => Amenity, (amenity) => amenity.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье

//   @JoinTable({
//     //join таблица с названием author_article
//     name: 'doctors_amenities',
//     joinColumn: { name: 'doctor_id' }, //для связи с идентификатором автора
//     inverseJoinColumn: { name: 'amenity_id' }, //для связи с идентификатором статьи
//   })
//   amenities: Amenity[]; //объект, в котором будем автоматически получать все статьи автора
}