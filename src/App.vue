<template>
  <div id="app">
    <!--其它页面都会被缓存，而不重新发送ajax请求；除了Detail页面，否则/detali/id="..."会因为缓存只发一次ajax请求而没有意义-->
    <keep-alive exclude="Detail">
      <!--router-view 标签表示显示的是当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
