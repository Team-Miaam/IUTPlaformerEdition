module.exports = {
	env: {
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		babelOptions: {
			configFile: './node_modules/miaam-scripts/configs/babelrc.json',
		},
	},
	plugins: ['@babel', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		// printWidth rule in prettier is not working
		'max-len': ['error', { code: 120, tabWidth: 2 }],
		'import/extensions': ['error', 'always'],
		'import/no-absolute-path': 0,
	},
	globals: {
		__createChunk__: 'readonly',
	},
};
