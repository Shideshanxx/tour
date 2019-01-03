<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>
<!--lang="stylus" 引用css预处理框架stylus；
    加scoped关键字，表示聚焦当前组件，防止style里的样式污染其它组件里的样式规定
    1rem = html font-size = 50px;下列样式是stylus书写语法;
    定义并引用stylus公共样式：1在styles创建公共样式，2用@import方法引入公共样式
    在路径中@表示根目录，但在样式中根路径为  ~@
    也可在webpack.base.conf.js中定义路径，但在css中使用也需要在前面加一个  ~
 -->
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
