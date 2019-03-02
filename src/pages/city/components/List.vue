<template>
    <!-- ref帮助获取DOM -->
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper" 
                        v-for="item of hot" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
                v-for="(item,key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                        class="item border-bottom" 
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// npm install better-scroll --save
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityClick (city) {
            //vuex的方法，需要store/index.js里actions配合
            //this.$store.dispatch('changeCity',city) 暂时不需要调用actions，直接调用mutations
            // this.$store.commit('changeCity',city) 可以改成下面的代码，因为...mapMutations(['changeCity'])做了映射
            this.changeCity(city)
            // 编程式导航
            this.$router.push('/')
        },
        // 把vuex里mutations里的changeCity事件映射到本组件的methods里
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter () {
            if (this.letter) {
                //用element缓存ref接受的循环出来的dom元素，scrollToElement是scroll自带的方法
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    //控制1像素边框的颜色，   .border-topbottom的伪元素 :before和 :after 的边框颜色是#ccc
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        //让屏幕暂时无法拖动，只能显示一屏的内容
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem 
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>