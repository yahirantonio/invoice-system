import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { GeneralResponse } from 'src/common/dto/GeneralResponse.entity';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { ProductDtoUID } from './dto/ProducDtoUID.entity';
import { PaginatedProduct } from './dto/paginatedProduct.dto';
import { Product } from './dto/product.dto';

@Injectable()
export class ProductsService {

  constructor(private readonly httpService: HttpService) { }

  async create(createProducDto: CreateProductDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ProductDtoUID>> = await firstValueFrom(this.httpService.post('/v3/products/create/', createProducDto));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<PaginatedProduct> {
    try {
      const res: AxiosResponse<PaginatedProduct> = await firstValueFrom(this.httpService.get('/v3/products/list'));
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

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ProductDtoUID>> = await firstValueFrom(this.httpService.post('/v3/products/update/' + id, updateProductDto));
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
