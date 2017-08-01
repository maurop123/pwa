import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default function({
  Vue,{{#store}}
  store,{{/store}}
}) {
  Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const router = new Router({
    routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  return router
}
