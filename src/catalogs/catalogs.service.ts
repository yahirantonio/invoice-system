import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { CfdiUsage } from './dto/cfdiUsages.dto';
import { GeneralResponse } from 'src/common/dto/GeneralResponse.entity';

@Injectable()
export class CatalogsService {
  constructor(private readonly httpService: HttpService) { }

  async GeneralService<T>(url: string): Promise<T[]> {
    try {
      const res: AxiosResponse<GeneralResponse<T[]>> = await firstValueFrom(this.httpService.get(url))
      return res.data.data;
    } catch (error) {
      throw error
    }
  }

  async cfdiUsages(): Promise<CfdiUsage[]> {
    try {
      const res: AxiosResponse<CfdiUsage[]> = await firstValueFrom(this.httpService.get('/v4/catalogo/UsoCfdi'))
      return res.data;
    } catch (error) {
      throw error
    }
  }

}
