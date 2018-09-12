<template>
	<div>
		<p>{{Message}}+{{mes}}</p>
	     <button @click="show">+</button>
	</div>
</template>

<script>
	export default{
		props:['Message'],
		data(){
			return{
				mes:""
			}
		},
		methods:{
			show(){
				this.$emit('add','这是子组件一向父组件传值')
			}
		},
		created(){
			setTimeout(()=>this.mes="这是状态一",3000)
		},
		activated(){
			console.log('组件一被激活！')
		},
		deactivated(){
			console.log('组件一被缓存')
		}
	}
</script>

<style>
</style>