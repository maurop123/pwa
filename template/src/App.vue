<template>
  <v-app>
    <v-container fluid>
      <v-toolbar class="white">
        <v-navigation-drawer
          persistent
          clipped
          floating
          hide-overlay
          temporary
          height="100%"
          v-model="drawer">
          <v-list>
            <v-list-tile :key="route.name"
              v-for="route in routes"
              @click.native="compose(()=>$router.push(route.path), toggleDrawer)"
              v-if="!route.noRender{{#firebase}} || !route.noRender(isLoggedIn){{/firebase}}"
            >
              <v-list-tile-title>
                \{{route.name | title }}
              </v-list-tile-title>
            </v-list-tile>
            {{#firebase}}<v-list-tile
              v-else-if="isLoggedIn"
              @click.native="compose(logout, toggleDrawer, ()=>$router.push({name:'login'}))"
            >
              <v-list-tile-title>
                Logout
              </v-list-tile-title>
            </v-list-tile>{{/firebase}}
          </v-list>
        </v-navigation-drawer>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer" />
        <v-toolbar-title>
          {{ name }}
        </v-toolbar-title>
        <v-spacer />
        {{#firebase}}<v-btn icon
          v-if="isLoggedIn"
          v-tooltip:left="{ html: accountTooltip }"
        >
          <v-icon>account_circle</v-icon>
        </v-btn>{{/firebase}}
      </v-toolbar>
      <router-view />
    </v-container>
    {{#store}}<v-snackbar
      class="messaging"
      v-model="snackbar"
      :timeout="2000"
      :bottom="true"
      :vertical="true"
    >
      \{{ message }}
    </v-snackbar>{{/store}}
  </v-app>
</template>

<script>
{{#store}}import {mapState, mapGetters, mapActions} from 'vuex'{{/store}}
import routes from './routes'
import {title} from './utils'

export default {
  name: 'app',
  data: () => ({
    drawer: false,
    snackbar: false,
    routes,
  }),{{#store}}
  computed: {
    ...mapState(['message']),{{#firebase}}
    ...mapState({
      user: state => state.auth.user,
    }),
    ...mapGetters(['isLoggedIn']),
    accountTooltip() {  return (this.user && this.user.email) ? this.user.email : 'Logged in' },{{/firebase}}
  },
  watch: {
    message(val) {
      this.snackbar = true
    },
  },{{/store}}
  methods: {
    {{#store}}{{#firebase}}...mapActions(['logout']),{{/firebase}}{{/store}}
    toggleDrawer() { this.drawer = !this.drawer },
    compose(...fns) { fns.forEach(fn => fn()) },
  },
  filters: {
    title,
  },
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
body {
  margin: 0;
}
.container {
  padding: 0;
}
.toolbar {
  margin-bottom: 15px;
}
.navigation-drawer {
  overflow: hidden;
  z-index: 0;
}

/* overridding vuetify */
.toolbar__content>:not(.btn):not(.toolbar__title):first-child {
  margin-left: 0 !important;
}
</style>
