<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <!-- 搜索结果页，设置一个z-index值，让其处于最上面 -->
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list" 
                :key="item.id"
                @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        //如果有匹配的结果
                        if (value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
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
    mounted () {
        // 引入beter-scroll使页面可以滚动
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        padding: 0 .1rem
        height: .72rem
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>