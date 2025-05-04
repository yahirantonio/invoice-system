import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Product } from './product.entity';

export class PaginatedProductEntity {
  @ApiProperty({ example: 'success' })
  @IsString()
  status: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  total: number;

  @ApiProperty({ example: 4 })
  @IsNumber()
  per_page: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  current_page: number;

  @ApiProperty({ example: 25 })
  @IsNumber()
  last_page: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  from: number;

  @ApiProperty({ example: 8 })
  @IsNumber()
  to: number;

  @ApiProperty({ type: [Product] })
  @ValidateNested({ each: true })
  @Type(() => Product)
  data: Product[];
}
