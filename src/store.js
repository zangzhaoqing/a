import Vue from 'vue';//这里为固定格式照抄
import Vuex from 'vuex';//这里为固定格式照抄
Vue.use(Vuex);//此为引用Vuex
const state={
    num:0
}
const store=new Vuex.Store({
	state
})
export default store