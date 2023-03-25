import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [DatasourceModule],
})
export class AuthorsModule {}