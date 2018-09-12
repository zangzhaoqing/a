<template>
	<div>
		<p>
			{{Messages}}+{{mes}}
		</p>
		<button @click="show">+</button>
	</div>
</template>
<script>
	export default{
		props:['Messages'],
		data(){
			return{
				mes:''
			}
		},
		methods:{
			show(){
				this.$emit('add','这是子组件二向父组件传值')
			}
		},
		created(){
			setTimeout(()=>this.mes="这是状态二",3000)		
		},
		activated(){
			console.log('组件二被激活！')
		},
		deactivated(){
			console.log('组件二被缓存')
		}
	}
</script>

<style>
</style>