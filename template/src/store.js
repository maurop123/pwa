import Vuex from 'vuex'

const state = {
}

const mutations = () => ({
})

const actions = () => ({
})

export default function({Vue}) {
  Vue.use(Vuex)

  return new Vuex.Store({
    state,
    mutations: mutations(),
    actions: actions(),
  })
}
