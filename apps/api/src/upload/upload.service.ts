import { BadRequestException, Injectable } from '@nestjs/common';
import { FileDto } from './dtos/file.dto';
import { Request } from 'Express';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';

@Injectable()
export class UploadService {
	constructor(private readonly cloudinary: CloudinaryService) {}
	uploadImageLocaly(req: Request, fileData: FileDto) {
		return {
			url: `${req.protocol}://${req.get('Host')}/${fileData.filename}`,
		};
	}

	async uploadImageToCloudinary(file: Express.Multer.File) {
		try {
			return await this.cloudinary.uploadImage(file);
		} catch (error) {
			console.log(error);

			throw new BadRequestException('Invalid file type.');
		}
	}
}
