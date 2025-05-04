import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducsService {
    constructor(private readonly httpService: HttpService) { }
}
