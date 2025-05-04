import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { AxiosError } from 'axios';

@Catch(AxiosError)
export class AxiosErrorFilter implements ExceptionFilter {
  catch(exception: AxiosError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = exception.response ? exception.response.status : 500;
    const message = exception.response ? exception.response.data : exception.message;

    response.status(status).json({
      statusCode: status,
      message: message,
      error: 'AxiosError',
    });
  }
}