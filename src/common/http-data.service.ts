import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

interface GeneralResponse<T> {
  response: string;
  data: T[];
}

@Injectable()
export class HttpDataService {
  constructor(private readonly httpService: HttpService) {}

  async GeneralService<T>(url: string): Promise<T[]> {
    try {
      const res: AxiosResponse<GeneralResponse<T>> = await firstValueFrom(
        this.httpService.get(url)
      );
      return res.data.data;
    } catch (error) {
      throw error;
    }
  }
}
