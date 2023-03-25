import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/author.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthorsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(author: Author) {
        this.datasourceService.getAuthors().push(author);
        return author;}

    findOne(id: number) {
        return this.datasourceService
            .getAuthors()
            .find((author) => author.id === id);
        }
    
    findAll(): Author[] {
        return this.datasourceService.getAuthors();
        }

    update(id: number, updatedAuthor: Author) {
        const index = this.datasourceService
            .getAuthors()
            .findIndex((author) => author.id === id);
        this.datasourceService.getAuthors()[index] = updatedAuthor;
        return this.datasourceService.getAuthors()[index];
        }

    remove(id: number) {
        const index = this.datasourceService
            .getAuthors()
            .findIndex((author) => author.id === id);
        this.datasourceService.getAuthors().splice(index, 1);
        return HttpStatus.OK;
        }

}