  import { Doctor } from 'src/doctors/entities/doctor.entity';
  import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('doctors') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class Amenity {
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    amenity_id: number;
    @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    name: string;
    @Column()
    cost: string;
    @Column()
    doctor_id: string;
    @ManyToMany((type) => Doctor, (doctor) => doctor.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  
    @JoinTable({
      //join таблица с названием author_article
      name: 'doctors',
      joinColumn: { name: 'amenity_id' }, //для связи с идентификатором автора
      inverseJoinColumn: { name: 'doctor_id' }, //для связи с идентификатором статьи
    })
    amenities: Amenity[]; //объект, в котором будем автоматически получать все статьи автора
    
  }
