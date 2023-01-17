import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		home: 'webpack create vue home-page',
		about: 'webpack create vue about-page',
	},
	mutations: {
		changeHome(state, newHome) {
			state.home = newHome
		},
		changeDep(state, newAbout) {
			state.about = newAbout
		},
	},
	actions: {},
	modules: {},
})
