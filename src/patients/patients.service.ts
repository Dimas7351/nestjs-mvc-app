import { Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(patient: Patient) {
        this.datasourceService.getPatients().push(patient);
        return patient;}

    findOne(id: number) {
        return this.datasourceService
            .getPatients()
            .find((patient) => patient.id === id);
        }
    
    findAll(): Patient[] {
        return this.datasourceService.getPatients();
        }

    update(id: number, updatedPatient: Patient) {
        const index = this.datasourceService
            .getPatients()
            .findIndex((patient) => patient.id === id);
        this.datasourceService.getPatients()[index] = updatedPatient;
        return this.datasourceService.getPatients()[index];
        }

    remove(id: number) {
        const index = this.datasourceService
            .getPatients()
            .findIndex((patient) => patient.id === id);
        this.datasourceService.getPatients().splice(index, 1);
        return HttpStatus.OK;
        }

}