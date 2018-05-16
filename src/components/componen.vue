<template>
	<div class="hello">
		<input type="text" @keyup.enter="enter" v-model="messages"/>
　　　　<p>{{message}}</p>
　　       
	</div>
</template>

<script>
	 export default {
	 	data:function(){
	 		return {
	 			messages:'',
	 			data:{
	 				required:false,
	 				num:20
	 			}
	 		}
	 	},
	 	props:['message'],
    	methods:{
    		enter(){
    			this.$emit('keypress',this.messages,this.data);
    		}
    	}
	 }
</script>

<style>
</style>