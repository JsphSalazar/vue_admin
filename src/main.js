import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

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

