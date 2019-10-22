<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link 
          to="/" 
          tag="span" 
          style="cursor: pointer"
        >
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat v-if="isAuthenticated" @click="userSignOut">
          <v-icon left>mdi-exit-to-app</v-icon>
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app
      v-model="sidebar" 
      absolute
      temporary
    >
    <v-layout column>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-layout>

    <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>

          <v-list-tile v-if="isAuthenticated" @click="userSignOut">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-tile-content>Sign Out</v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      sidebar: false
    }
  },
  computed: {
    appTitle() {
      return this.$store.state.appTitle
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    menuItems () {
      if(this.isAuthenticated) {
        return [
          { title: 'Home', path: '/home', icon: 'mdi-home'},
          { title: 'Dishes', path: '/dishes', icon: 'mdi-folder'}
        ]
      }else {
        return [
          { title: 'Sign Up', path: '/signup', icon: 'mdi-face'},
          { title: 'Sign In', path: '/signin', icon: 'mdi-account'}
        ]
      }
    }
  },
  methods: {
    userSignOut () {
      this.$store.dispatch('userSignOut')
    }
  }
};
</script>
