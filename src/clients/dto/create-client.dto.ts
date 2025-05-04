import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientDto {
    @ApiProperty({ example: 'XAXX010101000', description: 'RFC del cliente' })
    rfc: string;

    @ApiProperty({
        example: 'RAZON SOCIAL DE PRUEBA',
        description: 'Razón social sin régimen capital',
    })
    razons: string;

    @ApiProperty({ example: 12345, description: 'Código postal del domicilio fiscal' })
    codpos: number;

    @ApiProperty({ example: 'cliente@dominio.com', description: 'Correo electrónico principal del cliente' })
    email: string;

    @ApiPropertyOptional({ example: 'G03', description: 'Uso CFDI (opcional)' })
    usocfdi?: string;

    @ApiProperty({
        example: '601',
        description: 'Clave del régimen fiscal del cliente',
    })
    regimen: string;

    @ApiPropertyOptional({ example: 'Calle 1', description: 'Calle del domicilio fiscal' })
    calle?: string;

    @ApiPropertyOptional({ example: '123', description: 'Número exterior' })
    numero_exterior?: string;

    @ApiPropertyOptional({ example: 'B', description: 'Número interior' })
    numero_interior?: string;

    @ApiPropertyOptional({ example: 'Colonia Centro', description: 'Colonia del domicilio fiscal' })
    colonia?: string;

    @ApiPropertyOptional({ example: 'Ciudad de México', description: 'Ciudad del domicilio fiscal' })
    ciudad?: string;

    @ApiPropertyOptional({ example: 'Benito Juárez', description: 'Delegación' })
    delegacion?: string;

    @ApiPropertyOptional({ example: 'Centro', description: 'Localidad' })
    localidad?: string;

    @ApiPropertyOptional({ example: 'CDMX', description: 'Estado' })
    estado?: string;

    @ApiProperty({
        example: 'MEX',
        description: 'País con abreviatura (obligatorio)',
    })
    pais: string;

    @ApiPropertyOptional({
        example: '123456789',
        description: 'Número de identificación fiscal extranjero',
    })
    numregidtrib?: string;

    @ApiPropertyOptional({ example: 'Juan', description: 'Nombre del cliente' })
    nombre?: string;

    @ApiPropertyOptional({ example: 'Pérez López', description: 'Apellidos del cliente' })
    apellidos?: string;

    @ApiPropertyOptional({ example: '5512345678', description: 'Teléfono de contacto' })
    telefono?: string;

    @ApiPropertyOptional({ example: 'alternativo@correo.com', description: 'Correo electrónico alternativo' })
    email2?: string;

    @ApiPropertyOptional({ example: 'otro@correo.com', description: 'Segundo correo alternativo' })
    email3?: string;
}
