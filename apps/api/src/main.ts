import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });

	const configService = app.get(ConfigService);

	app.setGlobalPrefix(configService.get('app.prefix'));

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: configService.get('app.version'),
	});

	app.useGlobalPipes(new ValidationPipe());

	const config = new DocumentBuilder().setTitle('Image-Uploader').setVersion('1.0').build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup(`doc/v${configService.get('app.version')}`, app, document);

	await app.listen(configService.get('app.port'));
}

bootstrap();
