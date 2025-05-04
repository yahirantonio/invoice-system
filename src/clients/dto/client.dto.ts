import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {
  @ApiProperty({ example: '63ebd090d6015' })
  UID: string;

  @ApiProperty({ example: 'XAIME WEIR ROJO' })
  RazonSocial: string;

  @ApiProperty({ example: 'WERX631016S30' })
  RFC: string;

  @ApiProperty({ example: 'Personas Físicas con Actividades Empresariales y Profesionales' })
  Regimen: string;

  @ApiProperty({ example: '612' })
  RegimenId: string;

  @ApiProperty({ example: 'COPERNICO' })
  Calle: string;

  @ApiProperty({ example: '18374' })
  Numero: string;

  @ApiProperty({ example: 'INT 02' })
  Interior: string;

  @ApiProperty({ example: 'PERLA' })
  Colonia: string;

  @ApiProperty({ example: '01279' })
  CodigoPostal: string;

  @ApiProperty({ example: 'CIUDAD DE MEXICO' })
  Ciudad: string;

  @ApiProperty({ example: 'ALVARO OBREGON' })
  Delegacion: string;

  @ApiProperty({ example: 'CIUDAD DE MEXICO' })
  Estado: string;

  @ApiProperty({ example: 'LOMAS DE BECERRA' })
  Localidad: string;

  @ApiProperty({ example: 'MEX' })
  Pais: string;

  @ApiProperty({ example: '', required: false })
  NumRegIdTrib?: string;

  @ApiProperty({ example: 'G01' })
  UsoCFDI: string;

  @ApiProperty({ example: 123 })
  cfdis: number;

  @ApiProperty({ example: [], description: 'Lista de cuentas bancarias' })
  cuentas_banco: any[];

  @ApiProperty({
    example: {
      Nombre: 'XAIME',
      Apellidos: 'WEIR ROJO',
      Email: 'xaimeweir@gmail.com',
      Email2: '',
      Email3: '',
      Telefono: '3344556677'
    }
  })
  Contacto: {
    Nombre: string;
    Apellidos: string;
    Email: string;
    Email2: string;
    Email3: string;
    Telefono: string;
  };
}
