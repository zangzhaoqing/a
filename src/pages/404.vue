<template>
    <!--<user-profile v-ref:profile></user-profile>-->
    <div class="app">
    <main class="test">测试</main>
<div><a class="down" href="" download="downImg">下载</a>
</div>
    <div><a class="down2" href="" download="downImg">下载2</a></div>
    </div>
</template>
<script>
//import userProfile from '../components/userProfile.vue';
import html2canvas from "html2canvas"
export default{
	components:{
		
	},
	created:function(){
    
 },
//	var child=userProfile.$refs.profile;
	mounted(){
			var canvas2 = document.createElement("canvas");
    let
    _canvas = document.querySelector('main');
    var w = parseInt(window.getComputedStyle(_canvas).width);
    var h = parseInt(window.getComputedStyle(_canvas).height);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas2.width = w * 2;
    canvas2.height = h * 2;
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";
    //可以按照自己的需求，对context的参数修改,translate指的是偏移量
    //  var context = canvas.getContext("2d");
    //  context.translate(0,0);
    var context = canvas2.getContext("2d");
    context.scale(2, 2);
    html2canvas(document.querySelector('main'), { canvas: canvas2 }).then(function(canvas) {
        //document.body.appendChild(canvas);
        //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
        document.querySelector(".down").setAttribute('href', canvas.toDataURL());
    });
	}
}

</script>
<style scoped>
	* {
            margin: 0;
        }
 
 
        .test {
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            background-color: #87CEEB;
            display: inline-block;
            vertical-align: top;
        }
 
 
        canvas {
            margin-right: 5px;
        }
 
 
        .down {
            float: left;
            margin: 40px 10px;
        }
        .down2 {
            float: left;
            margin: 40px 30px;
        }
</style>