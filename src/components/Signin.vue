<template>
  <v-container class="ma-10">
    <v-card
      class="mx-auto"
      max-width="500"
      max-height="600"
      outlined
    >
    <div class="pa-3">
        <form @submit.prevent="userSignIn" >
          <v-layout column>
            <!-- <v-flex>
              <v-alert type="error" dismissible v-model="alert">
                {{ error }}
              </v-alert>
            </v-flex> -->
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                required></v-text-field>
            </v-flex>
            <v-card-actions class="justify-center">
                <v-btn class="ma-2" x-large fab color="primary" type="submit" :disabled="loading">Sign In</v-btn>
            </v-card-actions>
          </v-layout>
        </form>
    </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      alert: false
    }
  },
  methods: {
    userSignIn () {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
    }
  },
  computed: {
    error() {
      return this.$store.state.error
    },
    loading() {
      return this.$store.state.loading
    }
  },
  watch: {
    error(value) {
      if(value) {
        this.alert = true
      }
    },
    alert(value) {
      if(!value) {
        this.$store.commit('setError', null)
      }
    }
  }
}
</script>