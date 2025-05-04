import { ApiProperty } from "@nestjs/swagger";

export class GeneralMessage {
    @ApiProperty({ example: 'success' })
    response: string;

    @ApiProperty({ example: 'item eliminado exitosamente' })
    message: string;
}