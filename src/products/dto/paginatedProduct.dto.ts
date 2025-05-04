import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.dto';

export class PaginatedProduct {
  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ example: 100 })
  total: number;

  @ApiProperty({ example: 4 })
  per_page: number;

  @ApiProperty({ example: 2 })
  current_page: number;

  @ApiProperty({ example: 25 })
  last_page: number;

  @ApiProperty({ example: 5 })
  from: number;

  @ApiProperty({ example: 8 })
  to: number;

  @ApiProperty({ type: [Product] })
  data: Product[];
}
