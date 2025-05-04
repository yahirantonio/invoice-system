import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class ClientDtoUID extends PartialType(CreateClientDto) {
  @ApiProperty({ example: '59fa4f114751d' })
  uid: string
}