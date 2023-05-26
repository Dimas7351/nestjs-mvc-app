import { Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'


@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createPatient: Patient): Promise<Patient> {
    const patient = this.patientRepository.create(createPatient);
    return this.patientRepository.save(patient);
  }

  findOne(id: number): Promise<Patient> {
    return this.patientRepository.findOne({
      where: { id },
      relations: { orders: true },
    });
  }

  async findAll(): Promise<Patient[]> {
    const patients = await this.patientRepository.find({
      relations: {
        orders: true,
      },
    });
    return patients;
  }


  async update(id: number, updatePatient: Patient) {
    const patient = await this.patientRepository.findOne({ where: { id } });
    patient.fullname = updatePatient.fullname;
    patient.age = updatePatient.age; // doesnt work
    patient.mail = updatePatient.mail;
    await this.patientRepository.save(patient);
    return patient;
  }

  remove(id: number) {
    this.patientRepository.delete({ id });
  }
}