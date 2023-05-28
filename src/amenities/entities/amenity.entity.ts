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
  
  @Entity('amenities') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  @Unique(['id'])
  export class Amenity {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id'}) //колонка - идентификатор, значение генерируется автоматически
    id: number;
    @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    name: string;
    @Column()
    cost: number;
    // @OneToMany(() => Order, (order) => order.amenity)
    // orders: Order[];
    // @OneToMany(() => Doctor, (doctor) => doctor.fullname)
    // doctor: Doctor;
    @ManyToOne(() => Doctor)  //Задаем услугу
    @JoinColumn({referencedColumnName: 'id' })
    doctor: Doctor;

    @ManyToMany((type) => Order, (order) => order.amenities) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  
    @JoinTable({
      //join таблица с названием author_article
      name: 'orders_amenities',
      joinColumn: { name: 'amenity_id' }, //для связи с идентификатором автора
      inverseJoinColumn: { name: 'order_id' }, //для связи с идентификатором статьи
    })
    orders: Order[]; 
    
  }
