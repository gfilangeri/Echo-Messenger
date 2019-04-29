<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Echo Messenger</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <router-link to="/chat" tag="li">
            <md-list-item @click="changeActive(0)">
              <md-icon v-if="active==0" class="nav_button_active">chat_bubble</md-icon>
              <md-icon v-if="active!=0" class="nav_button">chat_bubble</md-icon>

              <span class="md-list-item-text">Messages</span>
            </md-list-item>
          </router-link>

          <router-link to="/contacts" tag="li">
            <md-list-item @click="changeActive(1)">
              <md-icon v-if="active==1" class="nav_button_active">perm_contact_calendar</md-icon>
              <md-icon v-if="active!=1" class="nav_button">perm_contact_calendar</md-icon>
              <span class="md-list-item-text">Contacts</span>
            </md-list-item>
          </router-link>

          <router-link to="/my-profile" tag="li">
            <md-list-item @click="changeActive(2)">
              <md-icon v-if="active==2" class="nav_button_active">account_circle</md-icon>
              <md-icon v-if="active!=2" class="nav_button">account_circle</md-icon>
              <!-- <md-icon class="nav_button">account_circle</md-icon> -->
              <span class="md-list-item-text">Profile</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view class="container"/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Vue from "vue";
//import 'vue-material/dist/vue-material.min.css';
import {
  MdApp,
  MdDrawer,
  MdToolbar,
  MdButton,
  MdIcon,
  MdList,
  MdContent
} from "vue-material/dist/components";
import MenuIcon from "vue-material-design-icons/Menu.vue";

Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdContent);
Vue.component("menu-icon", MenuIcon);

export default {
  name: "PersistentMini",
  data: () => ({
    menuVisible: false,
    active: null
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    changeActive(num) {
      this.active = num;
    }
  }
};
</script>

<style lang="scss" scoped>
//@import "~bulma/css/bulma.css";
.md-app {
  min-height: 350px;
  //border: 1px solid rgba(#000, 0.12);
}
.nav_button {
  color: black;
}
.nav_button_active {
  color: green;
}
.nav_button:hover {
  color: red;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
