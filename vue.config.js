const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        // 把全局公用的样式，全局引入，不用一个个引入
        prependData: `
          @import "@/common/css/base.scss";
          @import "@/common/css/common.scss";
          @import "@/common/css/iconfont.scss";
        `,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
  },
}
