import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Country, CountryResponse } from './dto/country.dto';
import { AxiosResponse } from 'axios';
import { TaxRegime, TaxRegimeResponse } from './dto/taxRegime.dto';
import { CfdiUsage } from './dto/cfdiUsages.dto';
import { productServiceKey, productServiceKeyResponse } from './dto/productServiceKey.dto';
import { unitMeasure, unitMeasureResponse } from './dto/unitMeasure.dto copy';
import { GeneralResponse } from './dto/GeneralResponse.dto';

@Injectable()
export class CatalogsService {
  constructor(private readonly httpService: HttpService) { }

  async GeneralService<T>(url: string): Promise<T[]> {
    try {
      const res: AxiosResponse<GeneralResponse<T>> = await firstValueFrom(this.httpService.get(url))
      return res.data.data;
    } catch (error) {
      throw error
    }
  }

  // async countries(): Promise<Country[]> {
  //   try {
  //     const res: AxiosResponse<CountryResponse> = await firstValueFrom(this.httpService.get('/v3/catalogo/Pais'))
  //     return res.data.data;
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async TaxRegimes(): Promise<TaxRegime[]> {
  //   try {
  //     const res: AxiosResponse<TaxRegimeResponse> = await firstValueFrom(this.httpService.get('/v3/catalogo/RegimenFiscal'))
  //     return res.data.data;
  //   } catch (error) {
  //     throw error
  //   }
  // }

  async cfdiUsages(): Promise<CfdiUsage[]> {
    try {
      const res: AxiosResponse<CfdiUsage[]> = await firstValueFrom(this.httpService.get('/v4/catalogo/UsoCfdi'))
      return res.data;
    } catch (error) {
      throw error
    }
  }

  // async productServiceKey(): Promise<productServiceKey[]> {
  //   try {
  //     const res: AxiosResponse<productServiceKeyResponse> = await firstValueFrom(this.httpService.get('/v3/catalogo/ClaveProductServ'))
  //     return res.data.data;
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // async unitMeasure(): Promise<unitMeasure[]> {
  //   try {
  //     const res: AxiosResponse<unitMeasureResponse> = await firstValueFrom(this.httpService.get('/v3/catalogo/ClaveUnidad'))
  //     return res.data.data;
  //   } catch (error) {
  //     throw error
  //   }
  // }

}
