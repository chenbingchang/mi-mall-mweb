/**
 * H5适配
 * 参考：https://juejin.im/post/5b6503dee51d45191e0d30d2#heading-24
 * 1px解决原理：dpr为多少，页面整体就缩小1/dpr，然后元素的大小再放大dpr倍恢复原样，由于的通过rem来设置大小，最终是html的字体大小放大dpr倍
 * 高清图：Html标签有data-dpr=""属性，css选择来配置不同分辨率的图片；或者通过css的媒体查询-webkit-min-device-pixel-ratio和-webkit-max-device-pixel-ratio，来解决
 * ，但是是要基于-webkit内核的浏览器才行
 * 适配：通过rem
 * 字体大小：字体大小仍然采用px，并且通过dpr和媒体查询来设置不同的大小，否则会导致某些字体会很小，由于在dpr=2中，页面缩小了1/2，所以字体大小要放大2倍才能保存原样
 * 手机字体缩放：通过放置一个display: none;的元素来判断，手机字体是否缩放
 * 横竖屏：横屏时html字体大小按屏幕高度计算
 */

function adaptation() {
  let docEle = document.documentElement // html标签
  let dpr = window.devicePixelRatio || 1 // dpr
  let scale = 1 / dpr // 要么整体缩放比例
  let fontSizeRadio = 1 // 手机字体正常比例
  let isLandscape = false // 是否横屏

  // 设置页面缩放比例并禁止用户手动缩放
  document
    .getElementsByName('viewport')[0]
    .setAttribute(
      'content',
      `width=device-width,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`
    )

  // 试探字体大小，用于检测系统字体是否正常
  let setFz = '100px'
  //给head增加一个隐藏元素
  let headEle = document.getElementsByTagName('head')[0]
  let spanEle = document.createElement('span')

  spanEle.style.fontSize = setFz
  spanEle.style.display = 'none'
  headEle.appendChild(spanEle)

  //判断元素真实的字体大小是否setFz
  //如果不相等则获取真实的字体换算比例
  let realFz = getComputedStyle(spanEle).getPropertyValue('font-size')

  if (setFz !== realFz) {
    //去掉单位px，下面要参与计算
    setFz = parseFloat(setFz)
    realFz = parseFloat(realFz)

    //获取字体换算比例
    fontSizeRadio = setFz / realFz
  }

  let tid = null // 定时器id，防抖
  let setBaseFontSize = function() {
    // 横屏状态检测
    if (window.orientation === 90 || window.orientation === -90) {
      isLandscape = true
    }

    /**
     * 注意：由于html的font-size设置的特别大，使得行内块元素之间的间距会变得非常大，注意清空行内块的间距
     * 设计稿基于iphone6(375*667)
     * 方便计算，设计的html的font-size: 100px;
     * screen.width 屏幕的逻辑像素
     */
    if (!isLandscape) {
      // 竖屏
      docEle.style.fontSize =
        100 * dpr * (screen.width / 375) * fontSizeRadio + 'px'
    } else {
      // 横屏
      docEle.style.fontSize =
        100 * dpr * (screen.height / 375) * fontSizeRadio + 'px'
    }
    docEle.setAttribute('data-dpr', dpr)
  }

  tid = setTimeout(setBaseFontSize, 33)

  //页面发生变化时重置font-size
  //防止多个事件重复执行，增加延迟300ms操作(防抖)
  window.addEventListener(
    'resize',
    function() {
      clearTimeout(tid)
      tid = setTimeout(setBaseFontSize, 300)
    },
    false
  )
  // 当一条会话历史记录被执行的时候将会触发页面显示(pageshow)事件。(这包括了后退/前进按钮操作，同时也会在onload 事件触发后初始化页面时触发)
  window.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(setBaseFontSize, 300)
      }
    },
    false
  )
}

export default adaptation