<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            //default 函数，。。。
            default () {
                return []
            }
        }
    },
    data () {
        return {
            //去swiper官网参考配置option的规则
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                //当轮播图父级元素或自身、子元素发生变化时自我刷新
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    //swiper自带类.swiper-container，其默认overflow: hidden,要想分页在图片下方显示，必须消除overflow：hidden
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            background: #fff
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
