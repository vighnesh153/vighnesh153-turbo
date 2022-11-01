module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
};