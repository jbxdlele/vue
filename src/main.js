import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 挂载axios
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 轮播图
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

// 搜索框
import { Search } from 'vant';
Vue.use(Search);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
