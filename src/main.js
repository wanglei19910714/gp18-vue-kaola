import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/reset.scss"
import "./assets/style/common.scss"


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

//test
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
