const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '^/kaola':{
        target: "https://m.kaola.com",
        changeOrigin: true,
        pathRewrite: {
          "^/kaola":""
        }
      },
      '^/pageskaola':{
        target: "https://pages.kaola.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/pageskaola":""
        }
      }
      
    }
  }
  
}