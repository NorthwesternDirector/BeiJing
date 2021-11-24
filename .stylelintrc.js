module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ].map(require.resolve),
  plugins: ['stylelint-declaration-block-no-ignored-properties'].map(require.resolve),
  rules: {
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
  }
}
