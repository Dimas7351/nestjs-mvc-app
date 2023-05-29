import { Catch, ExceptionFilter, NotFoundException } from '@nestjs/common'
import { ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
catch(exception: NotFoundException, host: ArgumentsHost) {
const ctx = host.switchToHttp();
const response = ctx.getResponse<Response>();
const request = ctx.getRequest<Request>();
const status = exception.getStatus();
const errorResponse = {
statusCode: status,
timestamp: new Date().toISOString(),
path: request.url,
message: exception.message || 'Запрашиваемый ресурс не найден'
};
response.status(status).json(errorResponse);
}
}