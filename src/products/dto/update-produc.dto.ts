import { PartialType } from '@nestjs/swagger';
import { CreateProducDto } from './create-produc.dto';

export class UpdateProducDto extends PartialType(CreateProducDto) {}
