import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//有些浏览器不支持promise 引用下面的这个插件，自动添加ES6属性
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/* ES6中键和值一样时，写一个就可以，比如下面的router等价于router:router */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
