// import adaptation from '@common/js/adaptation'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 适配，开发时为了查看元素的大小，可以先注释
// adaptation()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
