import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique
} from 'typeorm';


@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
@Unique(['id'])
export class Doctor {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @OneToMany(() => Order, (order) => order.doctor)
  orders: Order[];
  @ManyToMany((type) => Amenity, (amenity) => amenity.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье

  @JoinTable({
    //join таблица с названием author_article
    name: 'doctors_amenities',
    joinColumn: { name: 'doctor_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'amenity_id' }, //для связи с идентификатором статьи
  })
  amenities: Amenity[]; //объект, в котором будем автоматически получать все статьи автора
}