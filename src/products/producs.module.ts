import { Module } from '@nestjs/common';
import { ProducsService } from './producs.service';
import { ProducsController } from './producs.controller';

@Module({
  controllers: [ProducsController],
  providers: [ProducsService],
})
export class ProducsModule {}
