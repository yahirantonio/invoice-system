import { ApiProperty } from '@nestjs/swagger';

export class PaymentMethod {
  @ApiProperty({ example: '01' })
  key: string;

  @ApiProperty({ example: 'Efectivo' })
  name: string;
}