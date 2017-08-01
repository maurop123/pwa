<template>
  <v-app>
    <v-container fluid>
      <toolbar />
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
import Toolbar from './toolbar'

export default {
  name: 'app',
  components: {
    Toolbar,
  },
  data: () => ({
    snackbar: false,
  }),{{#store}}
  computed: {
    ...mapState(['message']),
  },
  watch: {
    message(val) {
      this.snackbar = true
    },
  },{{/store}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
body {
  margin: 0;
}

.container {
  padding: 0;
}

/* overridding vuetify */
.layout {
  margin: 0;
}
</style>
