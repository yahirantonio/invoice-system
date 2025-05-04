import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { GeneralResponse } from 'src/common/dto/GeneralResponse.entity';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { ClientDtoUID } from './dto/clientDtoUID.entity';
import { ClienteDto } from './dto/client.dto';

@Injectable()
export class ClientsService {

  constructor(private readonly httpService: HttpService) { }

  async create(CreateClientDto: CreateClientDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ClientDtoUID>> = await firstValueFrom(this.httpService.post('/v1/clients/create/', CreateClientDto));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<ClienteDto[]> {
    try {
      const res: AxiosResponse<GeneralResponse<ClienteDto[]>> = await firstValueFrom(this.httpService.get('/v1/clients'));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const res: AxiosResponse<GeneralResponse<ClienteDto>> = await firstValueFrom(this.httpService.get('/v1/clients/' + id));
      console.log(res.data)
      return res.data.Data!
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateProducDto: UpdateClientDto) {
    try {
      const res: AxiosResponse<GeneralResponse<ClientDtoUID>> = await firstValueFrom(this.httpService.post(`/v1/clients/${id}/update`, updateProducDto));
      return res.data.data
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const res: AxiosResponse<GeneralMessage> = await firstValueFrom(this.httpService.get('/v1/clients/delete/' + id));
      return res.data
    } catch (error) {
      throw error;
    }
  }
}
