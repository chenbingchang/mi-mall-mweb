const path = require('path')
function resolve (dir) {
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
  // @vue/cli-plugin-pwa插件配置
  pwa: {
    // 浏览器小图标路径，这里配置的是html的meta的图标
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
    /*
    mainfest
    Error while trying to use the following icon from the Manifest: http://localhost:8080/img/icons/android-chrome-192x192.png (Download error or resource isn't a valid image)
    这个错误是由于vue-cli4有问题，具体参考：https://github.com/vuejs/vue-cli/issues/4069。通过加pwa.manifestOptions.icons就好了
    */
    manifestOptions: {
      // 这里配置的是mainfest的图标
      icons: [{
        src: 'icons/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icons/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      }],
    },
  },

}
