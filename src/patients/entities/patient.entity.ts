import { IsNumber, IsString } from 'class-validator';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique
} from 'typeorm';

@Entity('patients') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
@Unique(['id'])
export class Patient {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @IsString()
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  
  @IsNumber()
  @Column()
  age: number;

  @IsString()
  @Column()
  mail: string;
  @OneToMany(() => Order, (order) => order.patient)
  orders: Order[];
}


