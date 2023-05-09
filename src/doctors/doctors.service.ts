// import { Injectable } from '@nestjs/common';
// import { Doctor } from 'src/doctors/entities/doctor.entity';
// import { DatasourceService } from 'src/datasource/datasource.service';
// import { HttpStatus } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateDoctorDto } from './dto/AuthorDTO';
// import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';


// @Injectable()
// export class DoctorsService {

//     constructor(
//         @InjectRepository(Doctor)
//         private readonly doctorRepository: Repository<Doctor>,
//       ) {}

//       async create(doctorDto: CreateDoctorDto): Promise<Doctor>
//  {
//     //получаем объект CreateAuthorDto
//     const doctor = this.doctorRepository.create(); //создаем объект Author из репозитория
//     doctor.fullname = doctorDto.fullname; //заполняем поля объекта Author
//     await this.doctorRepository.save(doctor); //сохраняем объект Author в БД
//     return doctor; //возвращаем объект Author
//   }


//   findOne(id: number): Promise<Doctor> {
//     // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
//     return this.doctorRepository.findOne({
//       //получаем объект Author по id
//       where: { id }, //указываем условие поиска по id
//       relations: { amenities: true }, //получаем связанные объекты
//     });
//   }

//         async findAll(): Promise<Doctor[]> {
//             const doctors = await this.doctorRepository.find({
//               //получаем связанные объекты
//               relations: {
//                 amenities: true
//               },
//             }); //получаем массив Author из БД
//             return doctors; //возвращаем массив Author
//           }
    

//           async findIncomplete(): Promise<IncompleteDoctorDto[]> {
//             const doctors = await this.doctorRepository.find(); //получаем массив Author из БД
//             const incompleteDoctors: IncompleteDoctorDto[] = doctors.map((doctor) => 
//         {
//               //преобразуем массив Author в массив IncompleteAuthorDto
//               const incompleteDoctor = new IncompleteDoctorDto();
//               incompleteDoctor.id = doctor.id;
//               return incompleteDoctor;
//             });
//             return incompleteDoctors; //возвращаем массив IncompleteAuthorDto
//           }

//           async update(id: number, updateDoctor: Doctor) {
//             //получаем объект Author для обновления по id
//             const doctor = await this.doctorRepository.findOne({ where: { id } }); 
//         //получаем объект Author по id из БД
//             doctor.fullname = updateDoctor.fullname; //обновляем поля объекта Author
//             await this.doctorRepository.save(doctor); //сохраняем объект Author в БД
//             return doctor; //возвращаем объект Author
//           }
        

//           remove(id: number) {
//             this.doctorRepository.delete({ id }); //удаляем объект Author из БД
//           }

// }


import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/AuthorDTO';
import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  async create(doctorDto: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create();
    doctor.fullname = doctorDto.fullname;
    await this.doctorRepository.save(doctor);
    return doctor;
  }

  findOne(id: number): Promise<Doctor> {
    return this.doctorRepository.findOne({
      where: { id },
      relations: { amenities: true },
    });
  }

  async findAll(): Promise<Doctor[]> {
    const doctors = await this.doctorRepository.find({
      relations: {
        amenities: true,
      },
    });
    return doctors;
  }

  async findIncomplete(): Promise<IncompleteDoctorDto[]> {
    const doctors = await this.doctorRepository.find();
    const incompleteDoctors: IncompleteDoctorDto[] = doctors.map((doctor) => {
      const incompleteDoctor = new IncompleteDoctorDto();
      incompleteDoctor.id = doctor.id;
      return incompleteDoctor;
    });
    return incompleteDoctors;
  }

  async update(id: number, updateDoctor: Doctor) {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    doctor.fullname = updateDoctor.fullname;
    await this.doctorRepository.save(doctor);
    return doctor;
  }

  remove(id: number) {
    this.doctorRepository.delete({ id });
  }
}
