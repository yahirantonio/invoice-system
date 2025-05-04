import { ApiProperty } from '@nestjs/swagger';

export class CurrencyDto {
  @ApiProperty({ example: 'AED' })
  key: string;

  @ApiProperty({ example: 'Dirham de EAU' })
  name: string;
}
