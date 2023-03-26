import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/authors/entities/doctor.entity';
import { Patient } from 'src/patients/entities/patient.entity'

@Injectable()
export class DatasourceService {
  private authors: Doctor[] = [];
  private patients: Patient[] = [];

  getDoctors(): Doctor[] {
    return this.authors;
  }

  getPatients(): Patient[] {
    return this.patients;
  }

}
