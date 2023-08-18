module.exports = {
	extends: ['custom/vite-react.json'],
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
};
