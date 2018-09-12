<template>
	<form action="" v-if="isShow">
		<input type="text" v-model="alertMsg"/>
		<input type="text" v-model="titleMsg" />
		<input type="submit" v-on:click="close"/>
	</form>
</template>
<script>
	export default{
		name:"CbForm",
		props:{
			isShow:{
				type:Boolean,
				default:""
			},
			alertMsg:{
				type:Array,
				default:function(){
					return [1,2,3]
				}
			},
			titleMsg:{
				type:String,
				default:""
			}
		},
		methods:{
			close:function(){
				
			}
		}
	}
</script>
<style>
	
</style>