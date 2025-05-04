import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ example: '59fa4f114751d' })
  uid: string;

  @ApiProperty({ example: 'Servicio técnico de orientación' })
  name: string;

  @ApiProperty({ example: 1048.95 })
  price: number;

  @ApiProperty({ example: 'sku-003' })
  sku: string;

  @ApiProperty({ example: 'Unidad de servicio' })
  unidad: string;

  @ApiProperty({ example: '43232107' })
  claveprodserv: string;

  @ApiProperty({ example: 'E48' })
  claveunidad: string;
}