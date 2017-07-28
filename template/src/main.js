{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#firebase}}
import {db, Auth} from './database'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/firebase}}
{{#store}}
import Store from './store'
const store = Store({
  Vue{{#firebase}},
  db,
  Auth{{/firebase}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
})
{{/store}}
{{#router}}
import Router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const router = Router({
  Vue,{{#store}}
  store,{{/store}}
})
{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#store}}
  store,
  {{/store}}
  {{#router}}{{#store}}{{#firebase}}
  beforeCreate() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        store.commit('login', user)
        if (store.state.auth.loginSuccess) store.state.auth.loginSuccess()
      } else {
        store.commit('logout')
      }
      store.dispatch('hydrate')
    })
  },
  {{/firebase}}{{/store}}{{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
