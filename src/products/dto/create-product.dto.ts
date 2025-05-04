import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ example: 'K001' })
    code: string;

    @ApiProperty({ example: 'Desarrollo de banner para publicidad' })
    name: string;

    @ApiProperty({ example: '35.9' })
    price: string;

    @ApiProperty({ example: 1154544511 })
    clavePS: number;

    @ApiProperty({ example: 'Unidad de servicio' })
    unity: string;

    @ApiProperty({ example: 'E48' })
    claveUnity: string;
}
