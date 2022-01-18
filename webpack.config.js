process.env.NODE_ENV = 'production'
process.chdir(__dirname)

const { paths } = require('react-app-rewired')
const overrides = require('react-app-rewired/config-overrides')

// eslint-disable-next-line import/no-dynamic-require
const webpackConfig = require(`${paths.scriptVersion}/config/webpack.config`)

module.exports = env => overrides.webpack(webpackConfig(env), env)
