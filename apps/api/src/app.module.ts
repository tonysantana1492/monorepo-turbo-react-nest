import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadModule } from './upload/upload.module';
import { validate } from './env.validation';
import appConfig from './config/app.config';
import cloudinaryConfig from './config/cloudinary.config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
			ignoreEnvFile: process.env.NODE_ENV === 'production',
			validate,
			load: [appConfig, cloudinaryConfig],
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploadedFiles'),
		}),
		UploadModule,
		CloudinaryModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
