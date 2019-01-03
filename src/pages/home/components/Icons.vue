<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconsList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '景点门票景点门票景点门票'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '景点门票'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc: '滑雪季节'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconsList.forEach((item,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]) {
                    pages[page]  = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<!--.swiper-container是轮播插件自带的类，将内部组件样式穿透到.icons中，使在.icons任何地方都可以滑动-->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container
        width: 100%
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .1rem
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                color: $darkTextColor
                text-align: center
                ellipsis()
</style>
