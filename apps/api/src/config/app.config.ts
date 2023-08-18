import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
	port: parseInt(process.env.APP_PORT, 10) || 3000,
	prefix: '/api',
	version: '1',
	env: process.env.NODE_ENV || 'development',
	fileDestination: './uploadedFiles',
	// sites that are CORS enabled
	frontendURL: process.env.FRONTEND_URL,
}));
