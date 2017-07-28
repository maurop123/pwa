<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <v-card>
        <v-card-title>
          Login
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="handleLogin">
            <v-text-field label="Email" v-model="email" />
            <v-text-field label="Password" v-model="password" type="password" />
            <button type="submit" style="display:none"></button>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-btn class="orange white--text" @click.native="handleLogin">
            Login
          </v-btn>
          <v-spacer />
            <v-btn flat class="grey--text" @click.native="createAccount({email, password})">
           Create Account
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions(['login', 'createAccount']),
      handleLogin() {
        this.$store.commit('setLoginSuccess', () => {
          this.$router.go(-1)
        })
        const {email, password} = this
        this.login({email, password})
      },
    },
  }
</script>
