<template>
	<div class="container">
	  <p> {{reserverMessage}}</p>
	  <p :class="[isClassName?activeClass:'',erroClassName]">{{message}}</p>	  
	  <div v-if="Math.random()>0.5">
	  	Now you can see;
	  </div>
	  <div v-else>
	  	Now you cannot;
	  </div>
	</div>	
</template>
<script>
	export default{
		computed:{
			reserverMessage:function(){
				return this.message.split('').reverse().join('');
			}
		},
		data(){
			return{
			   message:"hello",
			   erroClassName:'erroClassName',
			   activeClass:'activeClass',
			   isClassName:false
			}
		}
	}
</script>
<style>	
</style>