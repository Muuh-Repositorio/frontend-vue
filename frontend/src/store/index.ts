import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
	user: null,
  },
  mutations: {
	SET_USER(state, user): void {
		state.user = user
		if (user) {
			axios.defaults.headers.common['Authorization'] = `bearer ${user.access_token}`
		} else {
			delete axios.defaults.headers.common['Authorization']
		}
	}
  },
  actions: {
	setUser({commit}, user): void {
		commit('SET_USER', user)
	}
  },
  getters: {
	getUser(state) {
		return state.user
	}
  },
  modules: {
  }
})
