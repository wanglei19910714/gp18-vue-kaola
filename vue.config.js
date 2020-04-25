const path = require('path')
const pxTovw = require('postcss-px-to-viewport')

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
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          new pxTovw({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/]
          })
        ]
      }
    }
  }
  
}