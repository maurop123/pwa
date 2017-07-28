import homePage from './home.page'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#firebase}}import loginPage from './login.page'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/firebase}}

export default [ {
    path: '/',
    name: 'home',
    component: homePage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#firebase}}, {
    path: '/login',
    component: loginPage,
    name: 'login',
    noRender: (isLoggedIn) => isLoggedIn{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{/firebase}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]
