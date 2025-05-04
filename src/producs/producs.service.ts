import { Injectable } from '@nestjs/common';
import { CreateProducDto } from './dto/create-produc.dto';
import { UpdateProducDto } from './dto/update-produc.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { PaginatedProductEntity } from './entities/paginatedProdcut.entity';
import { GeneralResponse } from 'src/common/entities/GeneralResponse.entity';
import { Product } from './entities/product.entity';
import { GeneralMessage } from 'src/common/entities/GeneralMessage.entity';
import { ProducDtoUID } from './entities/ProducDtoUID.entity';

@Injectable()
export class ProducsService {

  constructor(private readonly httpService: HttpService) { }

  async create(createProducDto: CreateProducDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ProducDtoUID>> = await firstValueFrom(this.httpService.post('/v3/products/create/', createProducDto));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<PaginatedProductEntity> {
    try {
      const res: AxiosResponse<PaginatedProductEntity> = await firstValueFrom(this.httpService.get('/v3/products/list'));
      return res.data
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      console.log(id)
      const res: AxiosResponse<GeneralResponse<Product>> = await firstValueFrom(this.httpService.get('/v3/products/show/' + id));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateProducDto: UpdateProducDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ProducDtoUID>> = await firstValueFrom(this.httpService.post('/v3/products/update/' + id, updateProducDto));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const res: AxiosResponse<GeneralMessage> = await firstValueFrom(this.httpService.get('/v3/products/delete/' + id));
      return res.data
    } catch (error) {
      throw error;
    }
  }
}
