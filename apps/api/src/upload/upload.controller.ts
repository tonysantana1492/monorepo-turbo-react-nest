import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { LocalFilesInterceptor } from './files.interceptor';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@/config/multer.config';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from './dtos/file.dto';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
	constructor(private readonly uploadService: UploadService) {}

	@ApiConsumes('multipart/form-data')
	@ApiBody({
		description: 'Upload image localy',
		type: FileUploadDto,
	})
	@UseInterceptors(LocalFilesInterceptor(MulterOptions))
	@Post('local')
	uploadFile(@Req() req: Request, @UploadedFile() file: Express.Multer.File) {
		return this.uploadService.uploadImageLocaly(req, file);
	}

	@ApiConsumes('multipart/form-data')
	@ApiBody({
		description: 'Upload image to Cloudinary',
		type: FileUploadDto,
	})
	@UseInterceptors(FileInterceptor('file'))
	@Post('cloudinary')
	uploadToCloudinary(@UploadedFile() file: Express.Multer.File) {
		return this.uploadService.uploadImageToCloudinary(file);
	}
}
