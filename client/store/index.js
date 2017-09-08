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

var store = new vuex.Store({
  state: {
    user: {},
    error: {}
  },
  mutations: {
    setError(state, err){
      state.error = err
    }
  },
  actions: {
    
    handleError({commit, dispatch}, err){
      commit('setError', err)
    }
  }

})


export default store
