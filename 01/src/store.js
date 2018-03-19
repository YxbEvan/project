import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
  count: 10,
  count2: 'count2'
}

const mutations = {
  add(context){
    console.log(context)
    context.count ++
  },
  decrease(context){
    context.count --
  }
}

const actions = {
  add(add){
    add.commit('add')
  },
  decrease(decrease){
    decrease.commit('decrease')
  },
  oddAdd({commit, state}){
    if(state.count %2 === 0){
      commit('add')
    }
  }
}

const getters = {
  count(context){
    return context.count
  },
  getOdd(context){
    return context.count %2 === 0 ? '偶数' : '奇数'
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

