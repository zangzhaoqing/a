<template>
	<div v-if="show">
        <p>默认初始值是{{show}}，所以是显示的</p>
        <button @click.stop="closeDiv">关闭</button>
    </div>
</template>

<script>
	export default{
		props:['show'],
		methods:{
			closeDiv(){
				this.$emit('update:show',false);
			}
		}
	}
</script>

<style>
</style>