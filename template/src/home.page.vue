<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <v-card>
        <v-card-title>
          {{msg}
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Vuetify PWA starter installed'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  h1 {
    font-weight: normal;
  }
</style>
