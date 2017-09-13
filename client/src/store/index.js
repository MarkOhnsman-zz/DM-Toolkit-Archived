import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? 'production server' : '//localhost:3000/';

let api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: baseUrl,
  timeout: 2000,
  withCredentials: true
})

let handleError = (state, err) => {
  state.error = err
}

var store = new Vuex.Store({
  state: {
    user: {},
    error: {}
  },
  mutations: {
    //USERS
    setUser(state, user) {
      state.user = user
    },
    setError(state, err) {
      state.error = err
    }
  },
  actions: {
    //USERS
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit('setUser', res.data.data)
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res => {
          if (res.data.error) {
            return handleError(res.data.error)
          }
          commit("setUser", res.data.data)
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    authenticate() {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/login')
          }
          state.user = res.data.data
          router.push('/dashboard')
        }).catch(err => {
          router.push('/login')
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout', user)
        .then(res => {
          router.push('/login')
        }).catch(handleError)
    }
  }

})

export default store
