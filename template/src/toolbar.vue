<template>
<v-toolbar class="white">
  <v-toolbar-title>
    {{ name }}
  </v-toolbar-title>
  <v-spacer />{{#firebase}}{{#store}}
  <v-btn icon
    v-if="isLoggedIn"
    v-tooltip:left="{ html: accountTooltip }"
  >
    <v-icon>account_circle</v-icon>
  </v-btn>{{/store}}{{/firebase}}
  <v-menu bottom left class="mr-0">
    <v-btn icon slot="activator">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile :key="route.name"
        v-for="route in routes"
        @click.native="compose(()=>$router.push(route.path), toggleDrawer)"
        v-if="!route.noRender{{#firebase}}{{#store}} || !route.noRender(isLoggedIn){{/store}}{{/firebase}}"
      >
        <v-list-tile-title>
          \{{route.name | title }}
        </v-list-tile-title>
      </v-list-tile>{{#firebase}}
      <v-list-tile
    v-else-if="isLoggedIn"
    @click.native="compose(logout, toggleDrawer, ()=>$router.push({name:'login'}))"
    >
    <v-list-tile-title>
      Logout
    </v-list-tile-title>
      </v-list-tile>{{/firebase}}
    </v-list>
  </v-menu>
</v-toolbar>
</template>

<script>
{{#store}}import {mapState, mapGetters, mapActions} from 'vuex'{{/store}}
import routes from './routes'
import {title} from './utils'

export default {
  data: () => ({
    drawer: false,
    routes,
  }),
  filters: {
    title,
  },{{#firebase}}{{#store}}
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
    ...mapGetters(['isLoggedIn']),
    accountTooltip() {  return (this.user && this.user.email) ? this.user.email : 'Logged in' },
  },{{/store}}{{/firebase}}
  methods: {
    toggleDrawer() { this.drawer = !this.drawer },
    compose(...fns) { fns.forEach(fn => fn()) },
    {{#store}}{{#firebase}}...mapActions(['logout']),{{/firebase}}{{/store}}
  },
}
</script>

<style>
/* overridding vuetify */
.toolbar {
  margin-bottom: 15px;
}
</style>
