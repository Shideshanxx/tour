<template>
    <div class="wrapper">
        <!-- npm install vue-awesome-swiper@2.6.7 --save 安装轮播图插件-->
        <!-- 只有当数据传输到list中才会加载轮播，显示第一张图；否则不加v-if会默认先显示最后一张图;
            但是最好不要在模板中写逻辑，所以在computed里书写逻辑 -->
        <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>
<script>
//ES6中简化data: function(){...} 成下面形式
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }
    }
}
</script>
<!-- .wrapper >>> ...  这种方式让swiper组件(通过vue-awesome-swiper插件引入的)的样式修改可以反映到Swiper.vue组件，
     因为scoped让样式只聚焦当前Swiper.vue组件-->
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        // 设置.wrapper是为了在swiper图没有加载出来时，防止页面抖动
        overflow: hidden
        width: 100%
        // 不能直接把height设为31.25%，因为这样的话他是相对于页面高度的31.25%，而设置padding-bottom则是相对于父元素width
        height: 0
        padding-bottom: 31.25%
        background: #eee
        .swiper-img
            width: 100%
</style>
