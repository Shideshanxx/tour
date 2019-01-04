import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      //path此处的含义是根路径下的detail并带有一个此处取名为id的动态参数,变成一个动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    //每次切屏，scroll不会相互影响(都在最顶部)(router官方文档有介绍)
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
