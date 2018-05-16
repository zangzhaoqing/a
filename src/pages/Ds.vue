<template>
	<div >
	   <input type="submit"  value="1"/>
	   <input type="submit" value="2"/>
	   <p id="container">{{test}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				test : 'Hello World!'
			}
		},
	beforeCreate(){
//      console.log(this);
//      this.showData('创建vue实例前',this);
    },
    created(){
//      this.showData('创建vue实例后',this);
		
    },
    beforeMount(){
//      this.showData('挂载到dom前',this);
    },
    mounted(){
        this.showData('挂载到dom后',this);
    },
    beforeUpdate(){
       	this.showData('数据变化更新前',this);
    },
    updated(){
        this.showData('数据变化更新后',this);
    },
    beforeDestroy(){
        this.test ="3333";
        this.showData('vue实例销毁前',this);
    },
    destroyed(){
        this.showData('vue实例销毁后',this);
    },
	methods:{
		 realDom(){
    		console.log('真实dom结构：' + document.getElementById('container').innerHTML);
		},
		 showData(process,obj){
    		console.log(process);
     		console.log('data 数据：' + obj.test)
     		console.log('挂载的对象：')
     		console.log(obj.$el)
     		this.realDom();
     		console.log('------------------')
     		console.log('------------------')
		}
	}
	}
</script>

<style>
</style>