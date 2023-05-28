import { AmenitiesService } from './amenities.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters} from '@nestjs/common';
import { Amenity } from './entities/amenity.entity';
import { CreateAmenityDto } from './dto/AmenityDto';
import { ValidationExceptionFilter } from 'src/ex_filter';


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
  update(@Param('id') id: string, @Body() updateAmenity: CreateAmenityDto) {
    return this.amenitiesService.update(+id, updateAmenity);
  }

  @UseFilters(ValidationExceptionFilter)
  @Post()
  create(@Body() createAmenity: CreateAmenityDto) {
    return this.amenitiesService.create(createAmenity);
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.amenitiesService.remove(+id);
}
}

