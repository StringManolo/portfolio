module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
    project: './tsconfig.json',
	},
	plugins: [
		'react',
	],
	rules: {
    'react/react-in-jsx-scope': 'off', // No needed since React v17
    'react/prop-types': 'off', // No needed cuz of typescript
	},

  settings: {
    react: {
      version: 'detect',
    },
  },
};
