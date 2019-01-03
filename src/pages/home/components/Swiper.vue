<template>
    <div class="wrapper">
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
<!-- .wrapper >>> ...  这种方式让swiper内部组件的样式修改可以反映到swiper组件，
     因为scoped让样式只聚焦当前自己组件-->
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background #eee
        .swiper-img
            width: 100%
</style>
