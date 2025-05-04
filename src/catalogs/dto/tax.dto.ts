import { ApiProperty } from '@nestjs/swagger';

export class TaxDto {
  @ApiProperty({ example: '001' })
  key: string;

  @ApiProperty({ example: 'ISR' })
  name: string;
}
