import { Module } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';

@Module({
  controllers: [CatalogsController],
  providers: [CatalogsService],
})
export class CatalogsModule { }
