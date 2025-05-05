import { ApiProperty } from '@nestjs/swagger';

export class InvoiceResponseDto {
  @ApiProperty({ example: 'success' })
  response: string;

  @ApiProperty({ example: 'Factura creada y enviada satisfactoriamente' })
  message: string;

  @ApiProperty()
  UUID: string;

  @ApiProperty()
  uid: string;

  @ApiProperty({
    type: 'object',
    properties: {
      UUID: { type: 'string' },
      FechaTimbrado: { type: 'string' },
      NoCertificadoSAT: { type: 'string' },
      Version: { type: 'string' },
      SelloSAT: { type: 'string' },
      SelloCFD: { type: 'string' },
    },
  })
  SAT: {
    UUID: string;
    FechaTimbrado: string;
    NoCertificadoSAT: string;
    Version: string;
    SelloSAT: string;
    SelloCFD: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      Serie: { type: 'string' },
      Folio: { type: 'number' },
    },
  })
  INV: {
    Serie: string;
    Folio: number;
  };

  @ApiProperty()
  invoice_uid: string;
}
