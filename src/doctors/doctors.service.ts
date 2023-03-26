import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class DoctorsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(doctor: Doctor) {
        this.datasourceService.getDoctors().push(doctor);
        return doctor;}

    findOne(id: number) {
        return this.datasourceService
            .getDoctors()
            .find((doctor) => doctor.id === id);
        }
    
    findAll(): Doctor[] {
        return this.datasourceService.getDoctors();
        }

    update(id: number, updatedAuthor: Doctor) {
        const index = this.datasourceService
            .getDoctors()
            .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors()[index] = updatedAuthor;
        return this.datasourceService.getDoctors()[index];
        }

    remove(id: number) {
        const index = this.datasourceService
            .getDoctors()
            .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors().splice(index, 1);
        return HttpStatus.OK;
        }

}