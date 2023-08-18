import { plainToClass } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
	Development = 'development',
	Production = 'production',
	Test = 'test',
	Staging = 'staging',
}
class EnvironmentVariables {
	@IsEnum(Environment)
	@IsNotEmpty()
	NODE_ENV: Environment;

	@IsNumber()
	@IsNotEmpty()
	APP_PORT: number;

	@IsNotEmpty()
	@IsString()
	CLD_CLOUD_NAME: string;

	@IsNotEmpty()
	@IsString()
	CLD_API_KEY: string;

	@IsNotEmpty()
	@IsString()
	CLD_API_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToClass(EnvironmentVariables, config, {
		enableImplicitConversion: true,
	});
	const errors = validateSync(validatedConfig, {
		skipMissingProperties: false,
	});

	if (errors.length > 0) {
		throw new Error(errors.toString());
	}
	return validatedConfig;
}
