import { Controller } from '@nestjs/common';
import { ProducsService } from './producs.service';

@Controller('producs')
export class ProducsController {
  constructor(private readonly producsService: ProducsService) {}
}
