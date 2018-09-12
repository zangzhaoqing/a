<template>
	<div>
	 <p><span @click="show">标题一 </span > &#169; <span @click="showing"> 标题二</span></p>
	 <keep-alive> 
		<keep-alive1 v-if="seen" :Message="'我是状态一，我是从父组件中传过来的'" @add="consoles"></keep-alive1>
		<keep-alive2 v-else :Messages="'我是状态二，我是从父组件中传过来的'" @add="consoles"></keep-alive2>
	  </keep-alive> 
	  <input type="text" v-warn/>
	</div>
</template>

<script>
	import KeepAlive1 from '../components/KeepAlive1.vue'
	import KeepAlive2 from '../components/KeepAlive2.vue'
	export default{
		data(){
			return{
				seen:true
			}
		},
//		render(){
//			
//		},
	components:{
		KeepAlive1,
		KeepAlive2
	},
	created(){
//		console.log()
//console.log('this is not colored');
	},
	methods:{
		show(){
			this.seen=true
		},
		showing(){
			this.seen=false
		},
		consoles(e){
			console.log(e)
		}
	},
	directives: {
        // 局部指令
        warn: {
// 注册一个局部指令 warn
            inserted: function (el) {
//
                el.style.border = '2px solid red'
            },
            bind:function(el, binding, vnod,oldVnode){
            	console.log(el)
            	console.log(binding)
            	console.log(vnod)
            	console.log("%o",oldVnode)
            },
            inserte:function(el, binding, vnod,oldVnode){
            	console.log(el)
            	console.log(binding)
            	console.log(vnod)
            	console.log(oldVnode)
            },
			update:function(el, binding, vnod,oldVnode){
				console.log(el)
            	console.log(binding)
            	console.log(vnod)
            	console.log(oldVnode)
			},
			componentUpdated:function(el, binding, vnod,oldVnode){
				console.log(el)
            	console.log(binding)
            	console.log(vnod)
            	console.log(oldVnode)
			},
			unbind:function(el, binding, vnod,oldVnode){
				console.log(el)
            	console.log(binding)
            	console.log(vnod)
            	console.log(oldVnode)
			}
        },
        
    }
	}
</script>

<style>
</style>