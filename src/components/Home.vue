<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 md6 class="text-xs-center">
        <h1>Dashboard</h1>
      </v-flex>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
            <v-row align="center">
              <v-rating
                :value="4.5"
                color="amber"
                half-increments
                dense
                size="14"
                readonly
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1 black--text">
              $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <div class="title text--primary">Tonight's availability</div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>
              <v-chip>7:30PM</v-chip>
              <v-chip>8:00PM</v-chip>
              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple accent-4"
              text
              @click="reserve"
            >
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>