import { registerAs } from '@nestjs/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

const CLD_PROVIDER_TOKEN = 'CLOUDINARY';

export const CloudinaryProvider = {
	provide: CLD_PROVIDER_TOKEN,
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: (configService: ConfigService) => {
		return cloudinary.config({
			cloud_name: configService.get('cloudinary.cloudName'),
			api_key: configService.get('cloudinary.apiKey'),
			api_secret: configService.get('cloudinary.apiSecret'),
		});
	},
};

export default registerAs('cloudinary', () => ({
	cloudName: process.env.CLD_CLOUD_NAME,
	apiKey: process.env.CLD_API_KEY,
	apiSecret: process.env.CLD_API_SECRET,
}));
