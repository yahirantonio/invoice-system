import { ApiProperty } from "@nestjs/swagger";

export class Country {
    @ApiProperty({ description: 'Código del país', example: 'AFG' })
    key: string;

    @ApiProperty({ description: 'Nombre del país', example: 'Afganistán' })
    name: string;

    @ApiProperty({ description: 'Agrupación del país', example: 'Europa' })
    agrupacion: string;
}

export class CountryResponse {
    response: string;
    data: Country[];
}
