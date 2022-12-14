module.exports = {
  extends: ['vighnesh153/react-ts-base.eslintrc', 'next/core-web-vitals', 'turbo'],
  settings: {
    next: {
      rootDir: 'apps/*/',
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
};
