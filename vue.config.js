const webpack = require('webpack')

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    plugins: [
      // new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
      //   result.request = result.request.replace(/typeorm/, 'typeorm/browser')
      // })
      // new webpack.ProvidePlugin({
      //   'window.SQL': 'sql.js/js/sql.js'
      // })
    ]
  }
}
