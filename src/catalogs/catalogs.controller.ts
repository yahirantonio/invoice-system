import { Controller, Get } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { Country } from './dto/country.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaxRegime } from './dto/taxRegime.dto';
import { productServiceKey } from './dto/productServiceKey.dto';
import { unitMeasure } from './dto/unitMeasure.dto copy';
import { CfdiUsage } from './dto/cfdiUsages.dto';
import { PaymentMethod } from './dto/paymentForm.dto';
import { PaymentMethodDto } from './dto/paymentMethod.dto';
import { CurrencyDto } from './dto/currency.dto';
import { TaxDto } from './dto/tax.dto';

@ApiTags('catalogs')
@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) { }

  @Get('countries')
  @ApiOperation({ summary: 'get all contries', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'country list', type: [Country] })
  async countries(): Promise<Country[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/Pais');
  }

  @Get('taxRegimes')
  @ApiOperation({ summary: 'get all TaxRegimes', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'TaxRegimes list', type: [TaxRegime] })
  async TaxRegimes(): Promise<TaxRegime[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/RegimenFiscal');
  }

  @Get('productServiceKey')
  @ApiOperation({ summary: 'get all service with product Key ', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'service with product key', type: [productServiceKey] })
  async productServiceKey(): Promise<productServiceKey[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/ClaveProductServ');
  }

  @Get('unitMeasure')
  @ApiOperation({ summary: 'get all units of measure', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'units of measure', type: [unitMeasure] })
  async unitMeasure(): Promise<unitMeasure[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/ClaveUnidad');
  }

  @Get('cfdiUsages')
  @ApiOperation({ summary: 'get all usage of cfdi', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'usages of cfdi', type: [CfdiUsage] })
  async cfdiUsages(): Promise<CfdiUsage[]> {
    return await this.catalogsService.cfdiUsages();
  }

  @Get('paymentForm')
  @ApiOperation({ summary: 'get all payment methods', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'payment methods', type: [PaymentMethod] })
  async paymentForm(): Promise<PaymentMethod[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/FormaPago');
  }

  @Get('paymentMethod')
  @ApiOperation({ summary: 'Get all payment methods', description: 'Successful operation' })
  @ApiResponse({ status: 200, description: 'Payment methods', type: [PaymentMethodDto] })
  async paymentMethod(): Promise<PaymentMethodDto[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/MetodoPago');
  }

  @Get('currencies')
  @ApiOperation({ summary: 'Get all currencies', description: 'Successful operation' })
  @ApiResponse({ status: 200, description: 'Currencies list', type: [CurrencyDto] })
  async getCurrencies(): Promise<CurrencyDto[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/Moneda');
  }

  @Get('taxes')
  @ApiOperation({ summary: 'Get all taxes', description: 'Successful operation' })
  @ApiResponse({ status: 200, description: 'Taxes list', type: [TaxDto] })
  async getTaxes(): Promise<TaxDto[]> {
    return await this.catalogsService.GeneralService('/v3/catalogo/Impuesto');
  }
}
