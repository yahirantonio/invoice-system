import { IsString, IsNumber, IsBoolean, IsArray, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ImpuestoDto {
  @ApiProperty({ example: 229.9 })
  @IsNumber()
  Base: number;

  @ApiProperty({ example: '002' })
  @IsString()
  Impuesto: string;

  @ApiProperty({ example: 'Tasa' })
  @IsString()
  TipoFactor: string;

  @ApiProperty({ example: '0.16' })
  @IsString()
  TasaOCuota: string;

  @ApiProperty({ example: 36.784 })
  @IsNumber()
  Importe: number;
}

class ImpuestosDto {
  @ApiProperty({ type: [ImpuestoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImpuestoDto)
  Traslados: ImpuestoDto[];

  @ApiProperty({ type: [ImpuestoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImpuestoDto)
  Locales: ImpuestoDto[];
}

class ConceptoDto {
  @ApiProperty({ example: '81112101' })
  @IsString()
  ClaveProdServ: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  Cantidad: number;

  @ApiProperty({ example: 'E48' })
  @IsString()
  ClaveUnidad: string;

  @ApiProperty({ example: 'Unidad de servicio' })
  @IsString()
  Unidad: string;

  @ApiProperty({ example: 229.9 })
  @IsNumber()
  ValorUnitario: number;

  @ApiProperty({ example: 'Desarrollo a la medida' })
  @IsString()
  Descripcion: string;

  @ApiProperty({ example: '02' })
  @IsString()
  ObjetoImp: string;

  @ApiProperty({ type: ImpuestosDto })
  @IsObject()
  @ValidateNested()
  @Type(() => ImpuestosDto)
  Impuestos: ImpuestosDto;
}

class ReceptorDto {
  @ApiProperty({ example: '6169fc02637e1' })
  @IsString()
  UID: string;
}

export class CreateInvoiceDto {
  @ApiProperty({ type: ReceptorDto })
  @ValidateNested()
  @Type(() => ReceptorDto)
  Receptor: ReceptorDto;

  @ApiProperty({ example: 'factura' })
  @IsString()
  TipoDocumento: string;

  @ApiProperty({ type: [ConceptoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptoDto)
  Conceptos: ConceptoDto[];

  @ApiProperty({ example: 'P01' })
  @IsString()
  UsoCFDI: string;

  @ApiProperty({ example: 17317 })
  @IsNumber()
  Serie: number;

  @ApiProperty({ example: '03' })
  @IsString()
  FormaPago: string;

  @ApiProperty({ example: 'PUE' })
  @IsString()
  MetodoPago: string;

  @ApiProperty({ example: 'MXN' })
  @IsString()
  Moneda: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  EnviarCorreo: boolean;
}
