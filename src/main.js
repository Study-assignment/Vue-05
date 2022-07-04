import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

Vue.config.productionTip = false
import './styles/index.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
