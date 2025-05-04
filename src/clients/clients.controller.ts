import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { ClientDtoUID } from './dto/clientDtoUID.entity';
import { ClienteDto } from './dto/client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly ClientsService: ClientsService) { }

  @Post()
  @ApiOperation({ summary: 'Create Client', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Client Created', type: ClientDtoUID })
  async create(@Body() CreateClientDto: CreateClientDto): Promise<ClientDtoUID> {
    return await this.ClientsService.create(CreateClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all Clients', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Clients list', type: [ClienteDto] })
  async findAll(): Promise<ClienteDto[]> {
    return await this.ClientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get one Client', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Client', type: ClienteDto })
  findOne(@Param('id') id: string): Promise<ClienteDto> {
    return this.ClientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Client', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Client Updated', type: ClientDtoUID })
  update(@Param('id') id: string, @Body() updateProducDto: UpdateClientDto) {
    return this.ClientsService.update(id, updateProducDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Client', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Client Deleted', type: GeneralMessage })
  async remove(@Param('id') id: string) {
    return await this.ClientsService.remove(id);
  }
}
