const state = {
  user: null,
  loginSuccess: null,
}

const getters = {
  isLoggedIn(state) {
    return state.user !== null
  }
}

const mutations = () => ({
  setLoginSuccess(state, payload) {
    state.loginSuccess = payload
  },
  updateUser(state, payload) {
    state.user = payload
  },
  login(state, payload) {
    state.user = payload
  },
  logout(state) {
    state.user = null
  },
})

const actions = ({Auth}) => ({
  createAccount({commit}, {email, password}) {
    Auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      //var errorCode = error.code;
      commit('updateMessage', error.message)
    })
  },
  login({commit}, {email, password}) {
    Auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      //var errorCode = error.code;
      commit('updateMessage', error.message)
    })
  },
  logout({commit}) {
    return Auth.signOut()
     .then(() => { commit('logout') })
    .catch(err => commit('updateMessage', err => err.message))
  },
})

export default function({Auth}) {
  return {
    state,
    getters,
    mutations: mutations(),
    actions: actions({Auth}),
  }
}
