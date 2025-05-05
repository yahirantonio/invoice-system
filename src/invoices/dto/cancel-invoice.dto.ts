import { ApiProperty } from '@nestjs/swagger';

export class CancelInvoiceDto {
    @ApiProperty({ example: '01', description: 'cancelacion' })
    motivo: string;

    @ApiProperty({ example: '3336cbb9-ebd4-45e8-b60b-e7bfa6f6b5e0', description: 'sustituo' })
    folioSustituto: string;
}
