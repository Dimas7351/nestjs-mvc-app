import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { AmenitiesController } from './amenities.controller';
import { AmenitiesService } from './amenities.service';

@Module({
  controllers: [AmenitiesController],
  providers: [AmenitiesService],
  imports: [DatasourceModule],
})
export class AmenitiesModule {}