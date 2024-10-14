/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:compat/recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['compat', 'deprecation'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  ignorePatterns: ['/build', '/lib', '/static/docs', 'package-lock.json'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
      },
    },
    {
      // These don't seem to play nicely with SvelteKit's magical types
      files: ['+*.*s', '*.server.*s', '*.svelte'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
  rules: {
    'deprecation/deprecation': 'warn',
    'no-console': 'error',
    'no-debugger': 'error',
  },
};
