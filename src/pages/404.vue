<template>
    <user-profile v-ref:profile></user-profile>
</template>
<script>
import userProfile from '../components/userProfile.vue';
export default{
	components:{
		userProfile
	},
	created:function(){
    	console.log(userProfile)	
 	}
//	var child=userProfile.$refs.profile;
	
}

</script>
<style scoped>
	
</style>