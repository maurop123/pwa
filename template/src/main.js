{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#database}}
import database from './database'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/database}}
{{#router}}
import Router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const router = Router({Vue})
{{/router}}
{{#store}}
import Store from './store'
const store = Store({Vue})
{{/store}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
