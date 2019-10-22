<template>
  <div>
    <v-container grid-list-xl>
    <v-layout row wrap>
      
      <v-flex md12 v-if="update">
        <v-card class="mb-3 pa-3" >
          <v-form 
            @submit.prevent="updateDish(upDish)">
            <h3>Update a Dish</h3>
            <v-text-field 
              label="Name" 
              v-model="upDish.name"
            >
            </v-text-field>
            <v-textarea 
              label="Description"
              v-model="upDish.description"
            >
            </v-textarea>
            <v-text-field 
              label="Seller"
              v-model="upDish.userID"
            >
            </v-text-field>
            <v-btn color="success" type="submit" class="mx-2">Update Dish</v-btn>
            <v-btn @click="update = false" type="submit">Cancel</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md12 v-if="!update">
        <v-card class="mb-3 pa-3" >
          <v-form 
            @submit.prevent="addDish()">
            <h3>Create a Dish</h3>
            <v-text-field 
              label="Name" 
              v-model="dish.name"
            >
            </v-text-field>
            <v-textarea 
              label="Description"
              v-model="dish.description"
            >
            </v-textarea>
            <v-text-field 
              label="Seller"
              v-model="dish.userID"
            >
            </v-text-field>
            <v-btn block color="success" type="submit">Add Dish</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-card
        class="mb-3 mx-auto"
        max-width="300"
        v-for="(item, index) in dishes"
        :key="index"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
          <v-card-title>{{ item.name }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ item.userID }}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ item.description }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="orange"
            text
            @click="activateUpdate(item._id)"
          >
            Update
          </v-btn>

          <v-btn
            color="orange"
            text
            @click="deleteDish(item._id)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishes: [],
      dish: {name: '', description: '', userID: ''},
      update: false,
      upDish: {}
    }
  },
  created() {
    this.listDishes();
  },
  methods: {
    listDishes(){
      this.axios.get('/dish')
        .then(res => {
          //console.log(res);
          this.dishes = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        })
    },
    addDish(){
      this.axios.post('/new-dish', this.dish)
        .then(res => {
          this.dishes.push(res.data);
          this.dish.name = '';
          this.dish.description = '';
          this.dish.userID = '';
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    deleteDish(id){
      console.log(id);
      this.axios.delete(`/dish/${id}`)
        .then(res => {
          const index = this.dishes.findIndex(item => item._id === res.data._id);
          this.dishes.splice(index, 1);
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    activateUpdate(id){
      this.update = true;
      console.log(id);
      this.axios.get(`/dish/${id}`)
      .then(res => {
          this.upDish = res.data;
        })
        .catch(e => {
          console.log(e.response);
        })
    },
    updateDish(item){
      this.axios.put(`/dish/${item._id}`, item)
      .then(res => {
          const index = this.dishes.findIndex(n => n._id === res.data._id);
          this.dishes[index].name = res.data.name;
          this.dishes[index].description = res.data.description;
          this.dishes[index].userID = res.data.userID;
          this.update = false;
        })
        .catch(e => {
          console.log(e.response);
        })
    }
  }
}
</script>