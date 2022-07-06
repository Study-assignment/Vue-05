import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件

// 1. 下载axios库, main.js - 全局绑定属性 (确保任意.vue文件可以都访问到这个axios方法)
import axios from 'axios'
// 2. 基础地址
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
