<template>
	
    <div class="sorting">
   		<h1 v-html="newMessage3"></h1>
        <p> father</p>
        <Componen message="Hello World!" @keypress="Combiasso">
        	
        </Componen>
         <i v-once v-html>{{msg}}</i>
         <input type="text" @blur="bolt"/>
	        <div class="weui-weixin-content" id="rules">
	        <p>活动名称：{{message1}}</p>
	        <p>活动时间：{{message2}}</p>
	        <p>活动奖品：<span v-html="newMessage3">{{newMessage3}}</span></p>
	        <p>发奖时间：{{message4}}</p>
	        <p>{{message5}}</p>
	        <span v-html="newMessage3"></span>
	    	</div>
    </div>
   
</template>

<script>		
  import Componen from '../components/componen.vue';
  export default {
    components: {
      Componen  
    },
    data(){
    	return {
      		loginJson:{
          			"animal":"dog"
      		},
      		msg:'马德里竞技',
      		rawHtml:123,
      		message1: '感恩回馈大转盘',
            message2: '2017.9.22-2016.10.31',
            message3: '1.双色球一注~2.通用积分100钡',
            message4: '中奖后，即时发放。',
            message5:'请关注公众号（**通）点击菜单大转盘参与活动'
    	}
    },
    created:function(){
    	
    },
    methods:{
    	showChildMsg(mes,a,b){
    		console.log(mes)
    		console.log(a)
    		console.log(b)
    	},
    	ivannovic(a,b,d,e,f){
    		console.log(a);
    		console.log(b);
    		console.log(d);
    		console.log(e);
    		console.log(f)
    	},
    	Combiasso(a,b){
    		console.log(a);
    		console.log(b);
    	},
    	bolt(){
    		this.msg=56;
    		console.log(this.msg)
    	}
    	
    },
    computed:{
    		newMessage3: function () {
                var str ="";
                var newStr = this.message3.split('~');
                for (var i=0;i<newStr.length;i++ ){
                    str+=newStr[i] + "</br>"
                }
                return str;
            }
    },
    mounted:function(){
    	this.msg=34;
       	console.log(this.msg)
    }
    
  }
</script>
