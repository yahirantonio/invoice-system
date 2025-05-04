import { Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
    imports: [
        ConfigModule,
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: configService.get('Factura_Url'),
                headers: {
                    'F-PLUGIN': '9d4095c8f7ed5785cb14c0e3b033eeb8252416ed',
                    'F-Api-Key': configService.get('FApiKey'),
                    'F-Secret-Key': configService.get('FSecretKey')
                }
            }),
            inject: [ConfigService]
        }),
    ],
    exports: [HttpModule],
})


export class HttpCustomModule { }
