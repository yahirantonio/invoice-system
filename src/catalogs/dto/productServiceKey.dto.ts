import { ApiProperty } from '@nestjs/swagger';

export class productServiceKey {
  @ApiProperty({ example: '10201500', description: 'Clave única del producto o servicio' })
  key: string;

  @ApiProperty({ example: 'Rosales vivos azules o lavanda o púrpura', description: 'Nombre o descripción del producto' })
  name: string;

  @ApiProperty({ example: '', description: 'Complemento adicional del producto (si aplica)' })
  complement: string;
}
