import { Injectable } from '@nestjs/common';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'



@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenity)
    private readonly amenityRepository: Repository<Amenity>,
  ) {}

  async create(): Promise<Amenity> {
    const amenity = this.amenityRepository.create();
    return this.amenityRepository.save(amenity);
  }

  findOne(id: number): Promise<Amenity> {
    return this.amenityRepository.findOne({
      where: { id },
      relations: { doctors: true },
    });
  }

  async findAll(): Promise<Amenity[]> {
    const amenities = await this.amenityRepository.find({
      relations: {
        doctors: true,
      },
    });
    return amenities;
  }


  async update(id: number, updateAmenity: Amenity) {
    const amenity = await this.amenityRepository.findOne({ where: { id } });
    amenity.name = updateAmenity.name;
    await this.amenityRepository.save(amenity);
    return amenity;
  }

  remove(id: number) {
    this.amenityRepository.delete({ id });
  }
}
