import Vue from 'vue'
// npm install vuex --save安装并引入vuex
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
})