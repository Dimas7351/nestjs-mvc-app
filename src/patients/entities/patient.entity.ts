import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Patient {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  patient_id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @Column()
  age: number;
  @Column()
  mail: string;}

