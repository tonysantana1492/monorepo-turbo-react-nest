module.exports = {
	extends: ['custom/nest.json'],
	root: true,
	ignorePatterns: ['.eslintrc.cjs'],
	parserOptions: {
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
};
