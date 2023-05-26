import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PatientsModule } from './patients/patients.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    DoctorsModule,
    PatientsModule,
    AmenitiesModule,
    OrdersModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'education', //имя пользователя
      password: 'password', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	  entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}



