<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,   //或简化成HomeHeader
        HomeSwiper
    }
}
</script>

<style>

</style>

