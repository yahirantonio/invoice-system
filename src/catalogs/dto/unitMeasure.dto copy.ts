import { ApiProperty } from "@nestjs/swagger";

export class unitMeasure {
    @ApiProperty({ description: 'Clave de la unidad de ángulo', example: 'C81' })
    key: string;

    @ApiProperty({ description: 'Nombre de la unidad de ángulo', example: 'Radián' })
    name: string;
}