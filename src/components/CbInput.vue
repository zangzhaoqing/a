<template>
	<input type="text" v-model="message" />
	<!--<p>{{msg}}</p>-->
</template>

<script>
	export default{
		props:{
			message:{
				type:Number,
				required:true,
			    validator:function(value){
			    	return value > 10
			    }      			
			}
		},
		methods:{
			
				
			
		},
	   created(){
		
		},
	   mounted(){
		this.$on('increamentNumber',function(id){
        	alert(id)
        })
		}
		
	}
</script>

<style>
</style>