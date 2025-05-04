import { ApiProperty } from "@nestjs/swagger";

export class TaxRegime {
    @ApiProperty({ description: 'Código del país', example: 'AFG' })
    key: string;

    @ApiProperty({ description: 'Nombre del país', example: 'Afganistán' })
    name: string;
}

