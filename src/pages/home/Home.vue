<template>
    <div>
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader   //或简化成HomeHeader
    }
}
</script>

<style>

</style>

