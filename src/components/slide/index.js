import Slide from './Slide.vue';
const slides={
	install:function(Vue){
		Vue.component('slides',Slide)
	}
}
export default slides;