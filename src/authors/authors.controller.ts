import { AuthorsService } from './authors.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Author } from './entities/author.entity';


@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll() {
    return this.authorsService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.authorsService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updateAuthor: Author) {
    return this.authorsService.update(+id, updateAuthor);
  }

  @Post()
  create(@Body() createAuthor: Author) {
    return this.authorsService.create(createAuthor);
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.authorsService.remove(+id);
}
}

