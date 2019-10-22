<template>
  <v-container class="ma-12">
    <v-layout row>
      <v-flex xs12 md6>
        <div>
          <v-title class="display-2"> <span class="blue--text">Rate<b>IT</b><br></span></v-title>
          <blockquote class="text-start">
            Es la applicacion web dirigida a comedores industriales.<br>  
            De personalización y publicación de menús alimenticios semanales <br> a retroalimentación de los consumidores.<br>
          </blockquote>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="pa-3"
          raised="true"
          max-width="500"
        >
           <form @submit.prevent="userSignUp">
          <v-layout column>
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
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                required
                v-model="passwordConfirm"
                :rules="[comparePasswords]"
                ></v-text-field>
            </v-flex>
            <v-card-actions class="justify-center">
                <v-btn class="ma-2" x-large fab color="primary" type="submit" :disabled="loading">Sign Up</v-btn>
                <v-btn class="ma-2" outlined x-large fab color="indigo" type="submit" :disabled="loading" to="/signin">Sign In</v-btn>
            </v-card-actions>
            </v-layout>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>