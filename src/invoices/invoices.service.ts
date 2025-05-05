import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { GetOneInvoiceResponseDto } from './dto/getOne-invocieResponse.dto';
import { InvoiceResponseDto } from './dto/create-invoiceResponse.dto';
import { PagedInvoiceResponseDto } from './dto/getAll-invoiceResponse.dto';
import { getAllInvoiceDto } from './dto/getAll-invoice.dto';
import { CancelInvoiceDto } from './dto/cancel-invoice.dto';
import { CancelInvoiceResponseDto } from './dto/cancel-invoiceResponse.dto';

@Injectable()
export class InvoicesService {

  constructor(private readonly httpService: HttpService) { }

  async create(CreateInvoiceDto: CreateInvoiceDto) {
    try {
      const res: AxiosResponse<InvoiceResponseDto> = await firstValueFrom(this.httpService.post('/v4/cfdi40/create', CreateInvoiceDto));
      return res.data
    } catch (error) {
      throw error;
    }
  }

  async findAll(body: getAllInvoiceDto): Promise<PagedInvoiceResponseDto> {
    try {
      const res: AxiosResponse<PagedInvoiceResponseDto> = await firstValueFrom(this.httpService.post('/v4/cfdi/list', body));
      return res.data
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const res: AxiosResponse<GetOneInvoiceResponseDto> = await firstValueFrom(this.httpService.get('/v4/cfdi/uid/' + id));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string,  body: CancelInvoiceDto):Promise<CancelInvoiceResponseDto> {
    try {
      const res: AxiosResponse<CancelInvoiceResponseDto> = await firstValueFrom(this.httpService.post(`/v4/cfdi40/${id}/cancel`, body));
      return res.data
    } catch (error) {
      throw error;
    }
  }
}
