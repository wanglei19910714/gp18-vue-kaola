const path = require('path')

module.exports = {
  devServer: {
    proxy: {
    //   '/ajax': {
    //     target: "https://m.kaola.com",
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/ajax":""
    //     }
    //   },
      '/maoyan':{
        target: "http://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          "^/maoyan":""
        }
      }
      
    }
  }
  
}