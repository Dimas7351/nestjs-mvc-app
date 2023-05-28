import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PatientsService } from 'src/patients/patients.service';
import { AmenitiesService } from 'src/amenities/amenities.service';
import { Repository, In } from 'typeorm';
import { DoctorsService } from 'src/doctors/doctors.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/patients/entities/patient.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Amenity } from 'src/amenities/entities/amenity.entity';

@Injectable()
export class OrdersService {
    constructor(private readonly datasourceService: DatasourceService,
        private readonly patientsService: PatientsService,
        private readonly amenitiesService: AmenitiesService,
        private readonly doctorsService: DoctorsService,
        @InjectRepository(Order)
        private readonly orderRepository: Repository <Order>,
        @InjectRepository(Amenity)
        private readonly amenityRepository: Repository<Amenity>) {}

    async create(orderDto: CreateOrderDto): Promise<Order> {
        const order = this.orderRepository.create();

        // Получить данные пациента и услуги по их ID
        const patient = await this.patientsService.findOne(orderDto.patientId);
        // const doctor = await this.doctorsService.findOne(doctorId);

        order.patient = patient;
        // order.doctor = doctor;
    
          const amenities = await this.amenityRepository.find({
            where:{
            id: In(orderDto.amenities),
        }});
          order.amenities = amenities; 
        // Создать экземпляр заказа с использованием полученных данных
        // order.patientName = patient.fullname;
        // order.amenityName = amenity.name;
        // order.doctorName = doctor.fullname;
        // order.price = amenity.cost;
    
        // Сохранить заказ в базе данных
        await this.orderRepository.save(order);
        return order;
    
    
    }

   // async create(createAmenity: CreateAmenityDto): Promise<Amenity> {
        //   const amenity = this.amenityRepository.create();
        //   amenity.name = createAmenity.name;
        //   amenity.cost = createAmenity.cost;
        
        //   const doctors = await this.doctorRepository.find({
        //     where:{
        //     id: In(createAmenity.doctors),
        // }});
        //   amenity.doctors = doctors; 
      
        //   await this.amenityRepository.save(amenity);
        //   return amenity;
        // }

    findOne(id: number) {
        return this.datasourceService
            .getOrders()
            .find((order) => order.id === id);
        }
    
    // findAll(): Order[] {
    //     return this.datasourceService.getOrders();
    //     }

    async findAll(): Promise<Order[]> {
        const patients = await this.orderRepository.find({
          relations: {
            //doctor: true,
            amenities:true,
            patient:true
          },
        });
        return patients;
      }

    update(id: number, updatedOrder: Order) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders()[index] = updatedOrder;
        return this.datasourceService.getOrders()[index];
        }

    remove(id: number) {
        this.orderRepository.delete(id);
        }

}