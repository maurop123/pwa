<template>
  <v-app>
    <v-container fluid>
      <v-toolbar class="white">
        <v-navigation-drawer
          persistent
          clipped
          floating
          hide-overlay
          height="100%"
          v-model="drawer">
          <v-list>
            <v-list-tile>
              <v-list-tile-title>
                menu
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer" />
        <v-toolbar-title>
          {{ name }}
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: false,
  })
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

// overridding vuetify
.toolbar__content>:not(.btn):not(.toolbar__title):first-child, .toolbar__extension>:not(.btn):not(.toolbar__title):first-child {
  margin-left: 0;
}
</style>
