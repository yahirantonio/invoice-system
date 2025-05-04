import { ApiProperty } from '@nestjs/swagger';

export class CfdiUsage {
  @ApiProperty({ example: 'G01', description: 'Clave única del uso del CFDI' })
  key: string;

  @ApiProperty({ example: 'Adquisición de mercancias', description: 'Nombre o descripción del uso del CFDI' })
  name: string;

  @ApiProperty({ example: 'ambos', description: 'Tipo de uso permitido (ej. ingreso, egreso o ambos)' })
  use: string;

  @ApiProperty({
    example: ['601', '603', '606', '612', '620', '621', '622', '623', '624', '625', '626'],
    description: 'Lista de claves de regímenes fiscales aplicables'
  })
  regimenes: string[];
}
