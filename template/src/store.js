import Vuex from 'vuex'
{{#firebase}}
import { firebaseMutations, firebaseAction } from 'vuexfire'
{{/firebase}}

const state = {
  message: '',
}

const mutations = () => ({
  updateMessage(state, payload) {
    state.message = payload
  },{{#firebase}}
  ...firebaseMutations,
  {{/firebase}}
})

const actions = () => ({
  {{#firebase}}hydrate: firebaseAction(({state, getters, commit, bindFirebaseRef, unbindFirebaseRef}) => {
    // if (getters.isLoggedIn) {
      // bindFirebaseRef('savedTickets', db.child('tickets').orderByChild('user/id').equalTo(state.auth.user.uid))
    // } else if (state.savedTickets !== null) {
      // unbindFirebaseRef('savedTickets')
      // commit('savedTickets', [])
    // }
  }),{{/firebase}}
})

{{#firebase}}
import authStore from './auth.store'
const modules = ({Auth}) => ({
  auth: authStore({Auth}),
})
{{/firebase}}

export default function({
  Vue{{#firebase}},
  db,
  Auth{{/firebase}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}) {
  Vue.use(Vuex)

  return new Vuex.Store({
    {{#firebase}}modules: modules({ Auth }),{{/firebase}}
    state,
    mutations: mutations(),
    actions: actions(),
  })
}
