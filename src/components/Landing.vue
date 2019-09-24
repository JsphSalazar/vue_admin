<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 md6 class="text-xs-center">
        <h1>Welcome to Awesome App</h1>
      </v-flex>
      <v-flex xs6 sm6 offset-sm3>
        <blockquote class="blockquote text-xs-center">
          It's a basic Single Page application <br>
          with Google Firebase authentication
        </blockquote>
      </v-flex>
      <v-flex xs6 sm6 offset-sm3 class="text-xs-center">
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>