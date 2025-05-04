import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class Product {
  @ApiProperty({ example: '59fa4f114751d' })
  @IsString()
  uid: string;

  @ApiProperty({ example: 'Servicio técnico de orientación' })
  @IsString()
  name: string;

  @ApiProperty({ example: 1048.95 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'sku-003' })
  @IsString()
  sku: string;

  @ApiProperty({ example: 'Unidad de servicio' })
  @IsString()
  unidad: string;

  @ApiProperty({ example: '43232107' })
  @IsString()
  claveprodserv: string;

  @ApiProperty({ example: 'E48' })
  @IsString()
  claveunidad: string;
}