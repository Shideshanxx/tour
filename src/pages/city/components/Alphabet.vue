<template>
    <ul class="list">
        <li class="item" 
        v-for="item of letters" 
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    //刚开始cities为空，ajax请求之后，updated钩子就会被执行，
    //下面是性能优化的一步，单独抽出来绑定到this.startY，以免重复计算startY
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            //获取touch时的index，emit出去change事件和当前index值，然后change事件被监听，左侧内容跟随变动
            if (this.touchStatus) {
                //emit出去change事件有16ms的延迟，如果在延迟之内又触发该事件，
                //则上一次未执行的事件将被清除；通过这种函数节流的方式，大大提升性能
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                },16)
                
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        //flex布局。。。。垂直居中了
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute 
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>