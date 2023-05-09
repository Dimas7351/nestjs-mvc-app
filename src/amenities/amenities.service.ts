import { Injectable } from '@nestjs/common';
import { Amenity } from 'src/amenities/entities/amenity.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class AmenitiesService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(amenity: Amenity) {
        this.datasourceService.getAmenities().push(amenity);
        return amenity;}

    findOne(id: number) {
        return this.datasourceService
            .getAmenities()
            .find((amenity) => amenity.amenity_id === id);
        }
    
    findAll(): Amenity[] {
        return this.datasourceService.getAmenities();
        }

    update(id: number, updatedAmenity: Amenity) {
        const index = this.datasourceService
            .getAmenities()
            .findIndex((amenity) => amenity.amenity_id === id);
        this.datasourceService.getAmenities()[index] = updatedAmenity;
        return this.datasourceService.getAmenities()[index];
        }

    remove(id: number) {
        const index = this.datasourceService
            .getAmenities()
            .findIndex((amenity) => amenity.amenity_id === id);
        this.datasourceService.getAmenities().splice(index, 1);
        return HttpStatus.OK;
        }

}