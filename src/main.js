import Vue from 'vue'
import App from './App.vue'
import adaptation from './common/js/adaptation'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 适配
adaptation()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
