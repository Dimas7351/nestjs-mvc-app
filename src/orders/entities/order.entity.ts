import { Patient } from 'src/patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;

  // @ManyToOne(() => Amenity)  //Задаем услугу
  // @JoinColumn({referencedColumnName: 'id' })
  // amenity: Amenity;

  // @ManyToOne(() => Doctor)
  // @JoinColumn({referencedColumnName: 'id' })
  // doctor: Doctor;


  @ManyToOne(() => Patient)  //Задаем пациента
  @JoinColumn({name: "patientId", referencedColumnName: 'id' })
  patient: Patient;
  
  @ManyToMany((type) => Amenity, (amenity) => amenity.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  
    @JoinTable({
      //join таблица с названием author_article
      name: 'orders_amenities',
      joinColumn: { name: 'order_id' }, //для связи с идентификатором автора
      inverseJoinColumn: { name: 'amenity_id' }, //для связи с идентификатором статьи
    })
    amenities: Amenity[]; 

}


