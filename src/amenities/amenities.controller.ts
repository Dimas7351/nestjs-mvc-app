import { AmenitiesService } from './amenities.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Amenity } from './entities/amenity.entity';


@Controller('amenities')
export class AmenitiesController {
  constructor(private readonly amenitiesService: AmenitiesService) {}

  @Get()
  findAll() {
    return this.amenitiesService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.amenitiesService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updateAmenity: Amenity) {
    return this.amenitiesService.update(+id, updateAmenity);
  }

  @Post()
  create(@Body() createAmenity: Amenity) {
    return this.amenitiesService.create();
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.amenitiesService.remove(+id);
}
}

