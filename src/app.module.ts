import { Module } from '@nestjs/common';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ConfigModule } from '@nestjs/config';
import { HttpCustomModule } from './common/http-custom.module';
import { ProductsModule } from './products/products.module';
import { HttpDataService } from './common/http-data.service';
import { ClientsModule } from './clients/clients.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env${process.env.NODE_ENV === 'production' ? '.production' : ''}`,
    }),
    HttpCustomModule,
    CatalogsModule,
    ProductsModule,
    ClientsModule,
    InvoicesModule
  ],
  providers:[HttpDataService],
  exports: [HttpDataService]
})
export class AppModule { }
