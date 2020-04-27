import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入初始化css
import './assets/css/init.css'
//导入axios
import axios from 'axios'
//导入vant
import 'vant/lib/index.css'
import './plugins/vant.js'

//配置axios
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://3116d5539s.qicp.vip/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
