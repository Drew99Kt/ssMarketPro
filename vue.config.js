module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api.predic8.de',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vueJsToturials/" : "/",

}