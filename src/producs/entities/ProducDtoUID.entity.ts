import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProducDto } from '../dto/create-produc.dto';

export class ProducDtoUID extends PartialType(CreateProducDto) {
  @ApiProperty({ example: '59fa4f114751d' })
  uid: string
}