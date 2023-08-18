import { BadRequestException } from '@nestjs/common';

export const MulterOptions = {
	fieldName: 'file',
	path: '/',
	fileFilter: (request, file, callback) => {
		if (!file.mimetype.includes('image')) {
			return callback(new BadRequestException('Provide a valid image'), false);
		}
		callback(null, true);
	},
	limits: {
		fileSize: Math.pow(1024, 2), // 1 MB
	},
};
