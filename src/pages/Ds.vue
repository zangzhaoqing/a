<template>
	<div id="container">
	  <button-counter @increamentNumber="addMsg" :num="0"></button-counter>
	  <button-counter @increamentNumber="addMsg" :num="0"></button-counter>	  
	  <p @click="skip" >{{total}}</p>
	</div>
</template>

<script>
	import ButtonCounter from '../components/ButtonCounter.vue'
	import Cbinput from '../components/Cbinput.vue'
	export default{
		name:'',
		data(){
			return{
				total:0,
//				data:new Array
			}
		},
	components:{
		ButtonCounter,
		Cbinput
	},
	directives:{
		title:{
			inserted:function(el){
				document.title=el.dataset.title
			}
		}
	},
	beforeCreate(){
        console.log(this);
        this.showData('创建vue实例前',this);
    },
    created(){
//  	alert(this.$router)
        document.title="获取数据后"  
        this.showData('创建vue实例后',this);
		console.log(this.arr.constructor===Array);
		console.log(this.obj.constructor===String);       
    },
    beforeMount(){
        this.showData('beforeMount()函数，模板编译/挂载之前，挂载到dom前',this);
    },
    mounted(){
//  	this.message=12345678;
        this.showData('mounted()函数，模板编译/挂载之后，挂载到dom后',this);
    },
    beforeUpdate(){
    	
       	this.showData('beforeUpdate()函数，组件更新之前，数据变化更新前',this);
    },
    updated(){ 
    	
        this.showData('updated()函数，组件更新之后，数据变化更新后',this);
    },
    beforeDestroy(){
//      this.test ="3333";
        this.showData('beforeDestroy()函数，vue实例销毁前',this);
    },
    destroyed(){
        this.showData('destroyed()函数，vue实例销毁后',this);
    },
	methods:{
		 realDom(){		 	
    		console.log('真实dom结构：' + document.getElementById('container').innerHTML);
		},
		 showData(process,obj){
    		console.log("%c"+process," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
     		console.log('data 数据：' + obj.test)
     		console.log('挂载的对象：')
     		console.log(obj.$el)
     		this.realDom();
     		console.log('------------------')
     		console.log('------------------')
     },
     changeValue(){
            this.valueChild = !this.valueChild
     },
     balling(){
     	console.log(this);
     },
     something(event){
//   	event.target.value=this.txt;
//      console.log(event.target.value)
        this.txt=event.target.value;
     },
     increment1(a,b,c,d,e,f,g,h){
     	console.log(a);
     	console.log(b);
     	console.log(c);
     	console.log(d);
     	console.log(e);
     	console.log(f);
     	console.log(g);
     	console.log(h)
     },
     addMsg(){
     	this.total=this.total+1;
     },
     skip(){
//   	this.$router.push('/pages/404')
     }
     
	},
	computed:{
		
	}
	}
</script>

<style lang="sass">
</style>