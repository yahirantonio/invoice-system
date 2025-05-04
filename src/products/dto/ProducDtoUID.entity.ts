import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class ProductDtoUID extends PartialType(CreateProductDto) {
  @ApiProperty({ example: '59fa4f114751d' })
  uid: string
}