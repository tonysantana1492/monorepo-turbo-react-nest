import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './interfaces/cloudinary.response';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
	uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse> {
		return new Promise<CloudinaryResponse>((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
				if (error) return reject(error);

				resolve(result);
			});

			toStream(file.buffer).pipe(uploadStream);
		});
	}
}
