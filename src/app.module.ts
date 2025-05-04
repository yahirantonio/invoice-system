import { Module } from '@nestjs/common';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ConfigModule } from '@nestjs/config';
import { HttpCustomModule } from './common/http-custom.module';
import { ProducsModule } from './producs/producs.module';
import { HttpDataService } from './common/http-data.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env${process.env.NODE_ENV === 'production' ? '.production' : ''}`,
    }),
    HttpCustomModule,
    CatalogsModule,
    ProducsModule
  ],
  providers:[HttpDataService],
  exports: [HttpDataService]
})
export class AppModule { }
