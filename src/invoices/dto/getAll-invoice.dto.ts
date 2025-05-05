import { ApiPropertyOptional } from '@nestjs/swagger';

export class getAllInvoiceDto {
  @ApiPropertyOptional({ type: String, description: 'Mes en formato 2 dígitos.', example: '01' })
  month?: string;

  @ApiPropertyOptional({ type: String, description: 'Año en formato 4 dígitos.', example: '2024' })
  year?: string;

  @ApiPropertyOptional({ type: String, description: 'RFC del receptor.', example: 'WERX631016S30' })
  rfc?: string;

  @ApiPropertyOptional({ type: Number, description: 'Número de página.', example: 1 })
  page?: number;

  @ApiPropertyOptional({ type: Number, description: 'Límite de resultados por página.', example: 15 })
  per_page?: number;
}
