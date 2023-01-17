<template>
	<div>
		<div class="home">home页</div>
		<div>{{ $store.state.home }}</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home {
	color: red;
	width: 150px;
}
</style>
