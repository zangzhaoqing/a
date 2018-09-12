<template>	
 	<div class="app">
	  	<p>Original message: "{{ message }}"</p>
  		<p>Computed reversed message: "{{ reversedMessage }}"</p>
    	<CbForm :isShow="isShow" :alertMsg="alertMsg" :titleMsg="titleMsg"></CbForm>
 	</div>   
</template>
<script>
import CbForm from "../components/CbForm.vue"
export default{
  	data(){
  		return{
  			message:"123",
  			isShow:true,
  			alertMsg:[],
  			titleMsg:"AAA"
  		}  		 
  	},
  computed:{
  	reversedMessage:function(){
	    	return this.message.split('').reverse().join('')
	}
  },
  	components:{
  		CbForm
  	}
  }
</script>
<style lang="less" scoped>
	.form-group{
            margin:10px;
        }
    .form-group>label{
            display: inline-block;
            width: 5rem;
            text-align: right;
    }
</style>