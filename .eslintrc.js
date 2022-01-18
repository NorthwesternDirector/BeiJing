module.exports = {
  extends: [require.resolve('linters-self-fe/eslint')],
  globals: {
    onetrack: 'readonly',
  },
  rules: {
    'import/prefer-default-export': 0,
  },
}
