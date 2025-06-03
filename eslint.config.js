import eslint from '@eslint/js';
// @ts-expect-error
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';

export default ts.config(
  eslint.configs.recommended,
  ...ts.configs.strict,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    ignores: ['.svelte-kit/', 'build/', 'lib/', 'static/docs'],
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': 'error',
      'no-debugger': 'error',
      'svelte/valid-compile': 'warn',
    },
  },
);
