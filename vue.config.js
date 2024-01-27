const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: ''
  //publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/", // for github pages

})
