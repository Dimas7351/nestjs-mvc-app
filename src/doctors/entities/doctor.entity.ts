import { Amenity } from 'src/amenities/entities/amenity.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Doctor {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  doctor_id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @Column()
  position: string;
  @Column()
  amenity: string;
  @ManyToMany((type) => Amenity, (amenity) => amenity.amenity_id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье

  @JoinTable({
    //join таблица с названием author_article
    name: 'amenities',
    joinColumn: { name: 'doctor_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'amenity_id' }, //для связи с идентификатором статьи
  })
  amenities: Amenity[]; //объект, в котором будем автоматически получать все статьи автора
}