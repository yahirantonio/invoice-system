import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDataDto {
  @ApiProperty()
  RazonSocialReceptor: string;

  @ApiProperty()
  Folio: string;

  @ApiProperty()
  UID: string;

  @ApiProperty()
  UUID: string;

  @ApiProperty()
  Subtotal: string;

  @ApiProperty()
  Total: string;

  @ApiProperty()
  ReferenceClient: number;

  @ApiProperty({ nullable: true })
  NumOrder: string | null;

  @ApiProperty()
  Receptor: string;

  @ApiProperty()
  FechaTimbrado: string;

  @ApiProperty()
  Status: string;

  @ApiProperty()
  Version: string;

  @ApiProperty()
  TipoDocumento: string;

  @ApiProperty()
  XML: string;
}

export class GetOneInvoiceResponseDto {
  @ApiProperty()
  status: string;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: InvoiceDataDto })
  data: InvoiceDataDto;
}
