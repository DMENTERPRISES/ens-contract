module.exports = {
  // owner: danishahmedkm (danishahmed0123200@gmail.com)
  env: {
    mocha: true,
  },
  plugins: ['babel'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'no-console': 'off',
    'func-names': 'error', // enabled
  },
}
