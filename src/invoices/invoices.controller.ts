import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InvoiceDataDto } from './dto/getOne-invocieResponse.dto';
import { InvoiceResponseDto } from './dto/create-invoiceResponse.dto';
import { PagedInvoiceResponseDto } from './dto/getAll-invoiceResponse.dto';
import { getAllInvoiceDto } from './dto/getAll-invoice.dto';
import { CancelInvoiceDto } from './dto/cancel-invoice.dto';
import { CancelInvoiceResponseDto } from './dto/cancel-invoiceResponse.dto';

@ApiTags('invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly InvoicesService: InvoicesService) { }

  @Post()
  @ApiOperation({ summary: 'Create Invoice', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Invoice Created', type: InvoiceResponseDto })
  async create(@Body() CreateInvoiceDto: CreateInvoiceDto): Promise<InvoiceResponseDto> {
    return await this.InvoicesService.create(CreateInvoiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all Invoices', description: 'successful operation' })
  @ApiResponse({ status: 200, description: 'Invoices list', type: PagedInvoiceResponseDto })
  async findAll(@Query() query: getAllInvoiceDto): Promise<PagedInvoiceResponseDto> {
    return await this.InvoicesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'get one Invoice', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Invoice', type: InvoiceDataDto })
  findOne(@Param('id') id: string): Promise<InvoiceDataDto> {
    return this.InvoicesService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Invoice', description: 'successful operation' })
  @ApiParam({ name: 'id', example: '6543f3bf0016d' })
  @ApiResponse({ status: 200, description: 'Invoice Deleted', type: CancelInvoiceResponseDto })
  async remove(@Param('id') id: string, @Body() body: CancelInvoiceDto): Promise<CancelInvoiceResponseDto> {
    return await this.InvoicesService.remove(id, body);
  }
}
