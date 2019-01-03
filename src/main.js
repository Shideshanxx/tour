import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
/* ES6中键和值一样时，写一个就可以，比如下面的router等价于router:router */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
