<template>
	<header>
		<p>测试二</p>
		<p><span>这是</span><strong>{{message}}{{index}}</strong></p>
	</header>
</template>

<script>
	export default {
		props:['index'],
		data(){
			return{
				message:''
			}
		},
		activated() {
			console.log('测试2被激活');
		},
		deactivated() {
			console.log('测试2被缓存');
		},
		created(){
		 	setTimeout(()=>{
		 		this.message="这是测试二的数据状态"
		 	},2000);
		}
	}
</script>

<style>
</style>