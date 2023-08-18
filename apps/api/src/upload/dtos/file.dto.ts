import { ApiProperty } from '@nestjs/swagger';

export interface FileDto {
	filename: string;
	path: string;
	mimetype: string;
}

export class FileUploadDto {
	@ApiProperty({ type: 'string', format: 'binary' })
	file: Express.Multer.File;
}
