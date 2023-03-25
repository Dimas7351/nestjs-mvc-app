import { Module } from '@nestjs/common';
import { Author } from './author.entity';

@Module({
  controllers: [],
  providers: [],
  imports: [Author],
})
export class AuthorsModule {}