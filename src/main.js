import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Adding URL for the API
axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAUClb2ZU6Wonsj-8TXETAJDbbyWmX2CYo",
  authDomain: "vue-web-55831.firebaseapp.com",
  databaseURL: "https://vue-web-55831.firebaseio.com",
  projectId: "vue-web-55831",
  storageBucket: "",
  messagingSenderId: "830269490533",
  appId: "1:830269490533:web:48c2a2d62324cc6bbdcd8c"
})

const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App),
    created () {
      if(firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})

