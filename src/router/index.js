import Vue from 'vue'
import VueRouter from 'vue-router'

// 定义路由
const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/AboutPage.vue'),
	},
]

// 注册 VueRouter 至 Vue 实例
Vue.use(VueRouter)

// 创建 router 实例，然后传 `routes` 配置， 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	mode: 'history',
	routes,
})

export default router
