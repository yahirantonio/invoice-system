import { ApiProperty } from '@nestjs/swagger';

class InvoiceItemDto {
  @ApiProperty()
  UUID: string;

  @ApiProperty()
  UID: string;

  @ApiProperty()
  Folio: string;

  @ApiProperty()
  FechaTimbrado: string;

  @ApiProperty()
  Receptor: string;

  @ApiProperty()
  RazonSocialReceptor: string;

  @ApiProperty()
  ReferenceClient: number;

  @ApiProperty()
  Total: string;

  @ApiProperty()
  Subtotal: string;

  @ApiProperty()
  NumOrder: string;

  @ApiProperty()
  Status: string;

  @ApiProperty()
  Version: string;
}

export class PagedInvoiceResponseDto {
  @ApiProperty()
  total: number;

  @ApiProperty()
  per_page: number;

  @ApiProperty()
  current_page: number;

  @ApiProperty()
  last_page: number;

  @ApiProperty()
  from: number;

  @ApiProperty()
  to: number;

  @ApiProperty({ type: [InvoiceItemDto] })
  data: InvoiceItemDto[];
}
