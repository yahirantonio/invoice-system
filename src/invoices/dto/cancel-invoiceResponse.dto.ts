import { ApiProperty } from '@nestjs/swagger';

export class RespuestaApiDto {
  @ApiProperty({ example: 'success' })
  response: string;

  @ApiProperty({ example: '<?xml version="1.0" encoding="utf-8"?><Acuse>...</Acuse>' })
  acuse: string;
}

export class CancelInvoiceResponseDto {
  @ApiProperty({ example: 'success' })
  response: string;

  @ApiProperty({ example: 'Estimado cliente tu CFDI F66(a80387be-bb02-45c4-ac33-c85ed48a49ab) se canceló exitosamente' })
  message: string;

  @ApiProperty({ type: RespuestaApiDto })
  respuestaapi: RespuestaApiDto;
}