import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'class-validator';

@Catch(HttpException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException && exception.getStatus() === 400) {
      const validationErrors = exception.getResponse() as ValidationError[];
      const errorMessage = validationErrors.map(error => Object.values(error.constraints)).flat();
      response.status(400).json({ error: 'Validation Error', message: errorMessage });
    } else {
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}