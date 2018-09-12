<template>
	<button @click="increament">{{num}}</button>
</template>

<script>
export default {
     props:['num'],
     data(){
     	return{
//   		num:0     		
     	}
     },
      methods:{
   	increament(){
// 	  this.num=this.num+1;
   	  this.$emit('increamentNumber',1);
  	}
 }
}
 
</script>

<style scoped>
</style>