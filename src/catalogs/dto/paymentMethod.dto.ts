import { ApiProperty } from '@nestjs/swagger';

export class PaymentMethodDto {
  @ApiProperty({ example: 'PUE' })
  key: string;

  @ApiProperty({ example: 'Pago en una sola exhibición' })
  name: string;
}
