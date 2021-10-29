import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
	user: null,
	farm: 13
  },
  mutations: {
	SET_USER(state, user): void {
		state.user = user
		if (user) {
			axios.defaults.headers.common['Authorization'] = `bearer ${user.access_token}`
		} else {
			delete axios.defaults.headers.common['Authorization']
		}
	},
	SET_FARM(state, idt_farm): void {
		state.farm = idt_farm
	}
  },
  actions: {
	setUser({commit}, user): void {
		commit('SET_USER', user)
	},
	setFarm({commit}, idt_farm): void {
		commit('SET_FARM', idt_farm)
	}
  },
  getters: {
	getUser(state) {
		return state.user
	},
	getFarm(state) {
		return state.farm
	}
  },
  modules: {
  }
})
