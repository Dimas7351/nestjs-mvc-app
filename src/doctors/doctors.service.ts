
import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/DoctorDTO';
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
    doctor.specialization = doctorDto.specialization;
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
    doctor.specialization = updateDoctor.specialization;
    await this.doctorRepository.save(doctor);
    return doctor;
  }

  remove(id: number) {
    this.doctorRepository.delete({ id });
  }
}
function In(ids: number[]): number | import("typeorm").FindOperator<number> {
  throw new Error('Function not implemented.');
}

