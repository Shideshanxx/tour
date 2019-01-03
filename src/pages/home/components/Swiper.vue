<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
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
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'https://dimg04.c-ctrip.com/images/70080z000000mxqcqA1DE_1920_340_17.jpg'
            },{
                id: '0002',
                imgUrl: 'https://dimg04.c-ctrip.com/images/700s0z000000n2p714343_1920_340_17.jpg'
            }]
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
