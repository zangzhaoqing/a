<template>
	<div>
		<p @click="data">切换组件</p>
		<keep-alive>
	   <Test1 v-if="a" :index="a"></Test1>
	   <Test2 v-else :index="a"></Test2>
    </keep-alive>
	</div> 
</template>
<script>
import Test1 from "../components/test1.vue"
import Test2 from "../components/test2.vue"
export default{
	data(){
		return{
				a:true
		}
	},
	components:{
		Test1,
		Test2
	},
	methods:{
		data(){
		 return this.a=!this.a
		}		
	}
}
</script>
<style>
	
</style>