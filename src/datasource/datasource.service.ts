import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Patient } from 'src/patients/entities/patient.entity'
import { Amenity } from 'src/amenities/entities/amenity.entity'

@Injectable()
export class DatasourceService {
  private authors: Doctor[] = [];
  private patients: Patient[] = [];
  private amenities: Amenity[] = [];

  getDoctors(): Doctor[] {
    return this.authors;
  }

  getPatients(): Patient[] {
    return this.patients;
  }

  getAmenities(): Amenity[] {
    return this.amenities;
  }

}
