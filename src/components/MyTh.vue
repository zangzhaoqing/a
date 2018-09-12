<template>
	<!--<div>-->
		<input type="text" :class="jones" :placeholder="This"/>
	<!--</div>-->
</template>

<script>
	export default{
		data(){
			return{
				jones:'jones',
				This:'This is a input'
			}
		},
		props:{
			texts:Number,
			htmls:[String,Number],
			counting:{
				type:String,
				required:true
			},
			normalizedSize:{
				type: Number,
      		    default: 100
			}			
		}
		
	}
</script>

<style>
</style>