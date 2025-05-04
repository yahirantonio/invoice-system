import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GeneralMessage } from 'src/common/dto/GeneralMessage.entity';
import { ProductDtoUID } from './dto/ProducDtoUID.entity';
import { Product } from './dto/product.dto';
import { PaginatedProduct } from './dto/paginatedProduct.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @ApiOperation({ summary: 'Create Product', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Product Created', type: ProductDtoUID })
  async create(@Body() createProducDto: CreateProductDto): Promise<ProductDtoUID> {
    return await this.productsService.create(createProducDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all Products', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Products list', type: PaginatedProduct })
  async findAll(): Promise<PaginatedProduct> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get one Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product', type: Product })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product Updated', type: ProductDtoUID })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Product', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Product Deleted', type: GeneralMessage })
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(id);
  }
}
