// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/common.scss'
import '@/utils/element.js'
// import '@/components/packages'

import fetch from '@/utils/fetch.js'
import drag from '@/directives/drag.js'
import 'babel-polyfill'

let isProduction = process.env.NODE_ENV === 'production';

Vue.config.performance = !isProduction;

Vue.config.productionTip = false
Vue.prototype.$http = fetch;

// 注册一个全局自定义指令 v-drag
Vue.directive('drag', drag)
//全局省列表
Vue.prototype.provinceList = [];
// Vue.prototype.bus = new Vue();

const bus_baseurl = "http://192.168.9.13:8080/data-web/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

