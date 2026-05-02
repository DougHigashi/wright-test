// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.ts"],
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			semi: ['error', 'never'],
			"prefer-const": "error",
			'@stylistic/indent': ['error', 'tab'],
		}
	},
]