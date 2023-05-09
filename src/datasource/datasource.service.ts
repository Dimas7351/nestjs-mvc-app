import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Patient } from 'src/patients/entities/patient.entity'
import { Amenity } from 'src/amenities/entities/amenity.entity'
import { Order } from 'src/orders/entities/order.entity'

@Injectable()
export class DatasourceService {
  private doctors: Doctor[] = [];
  private patients: Patient[] = [];
  private amenities: Amenity[] = [];
  private orders: Order[] = [];

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  getPatients(): Patient[] {
    return this.patients;
  }

  getAmenities(): Amenity[] {
    return this.amenities;
  }

  getOrders(): Order[] {
    return this.orders;
  }

}
