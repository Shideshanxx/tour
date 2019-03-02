import Vue from 'vue'
import App from './App'
import router from './router'
// 300ms点击事件延迟问题（npm install fastclick --save）
import fastClick from 'fastClick'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//有些浏览器不支持promise 引用下面的这个插件，自动添加ES6属性
import 'babel-polyfill'
// 引入vuex仓库
import store from './store'
// 样式初始化
import 'styles/reset.css'
// 1像素边框问题（1像素边框在多倍屏显示为2像素或者多像素的物理像素）
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'
// 引入轮播图样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 把fastclick绑定到document.body下，这是fastclick自带的方法
fastClick.attach(document.body)
// 使用轮播图插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/* ES6中键和值一样时，写一个就可以，比如下面的router等价于router:router */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
