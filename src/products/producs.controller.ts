import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProducsService } from './producs.service';
import { CreateProducDto } from './dto/create-produc.dto';
import { UpdateProducDto } from './dto/update-produc.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedProductEntity } from './entities/paginatedProdcut.entity';
import { Product } from './entities/product.entity';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { ProducDtoUID } from './entities/ProducDtoUID.entity';

@ApiTags('products')
@Controller('products')
export class ProducsController {
  constructor(private readonly producsService: ProducsService) { }

  @Post()
  @ApiOperation({ summary: 'Create Product', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Product Created', type: ProducDtoUID })
  async create(@Body() createProducDto: CreateProducDto): Promise<ProducDtoUID> {
    return await this.producsService.create(createProducDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all Products', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Products list', type: PaginatedProductEntity })
  async findAll(): Promise<PaginatedProductEntity> {
    return await this.producsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get one Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product', type: Product })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.producsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product Updated', type: ProducDtoUID })
  update(@Param('id') id: string, @Body() updateProducDto: UpdateProducDto) {
    return this.producsService.update(id, updateProducDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product Deleted', type: GeneralMessage })
  async remove(@Param('id') id: string) {
    return await this.producsService.remove(id);
  }
}
