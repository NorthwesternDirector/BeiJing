const path = require('path')

const {
  override,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      relativeUrls: false,
      modifyVars: {
        '@primary-color': '#1890ff',
      },
    },
  }),
  addWebpackAlias({
    '@': path.resolve('src'),
  }),
)
