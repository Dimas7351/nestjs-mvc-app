import { PatientsService } from './patients.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Patient } from './entities/patient.entity';


@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll() {
    return this.patientsService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.patientsService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updatePatient: Patient) {
    return this.patientsService.update(+id, updatePatient);
  }

  @Post()
  create(@Body() createPatient: Patient) {
    return this.patientsService.create(createPatient);
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.patientsService.remove(+id);
}
}

