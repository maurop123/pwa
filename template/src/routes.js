import homePage from './home.page'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [ {
    path: '/',
    name: 'home',
    component: homePage,
  },
]
