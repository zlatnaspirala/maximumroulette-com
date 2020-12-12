
module.exports = {

  pages: {
    'index': {
      entry: './src/main.ts',
      template: 'public/index.html',
      title: 'Welcome to my develop stage server.',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'bad': {
      entry: './src/error-instance.ts',
      template: 'public/bad.html',
      title: 'Error page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }

  },
  devServer: {
    port: 3000
  },
  css: {
    sourceMap: true
  },
  pwa: {
    name: 'maximumroulette.com 2021',
    themeColor: '#000000',
    msTileColor: 'orange',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },

}
