<template>
  <div>
    <div class="buttons">
      <a class="button is-primary" v-if="!isLoggedIn" v-on:click="showSignupModal()">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light" v-if="!isLoggedIn" v-on:click="showLoginModal()">Log in</a>
      <a class="button is-light" v-if="isLoggedIn" v-on:click="logout">Log out</a>
    </div>
    <Signup
      v-bind:is-showing="showSignup"
      v-on:success="successSignup()"
      v-on:cancel="cancelSignup()"
    />
    <Login v-bind:is-showing="showLogin" v-on:success="successLogin()" v-on:cancel="cancelLogin()"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";
import Navigation from "@/components/Navigation.vue";
import { APIConfig } from "@/utils/api.utils";

@Component({
  components: {
    Signup,
    Login,
    Navigation
  }
})
export default class Home extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;

  showSignupModal() {
    this.showSignup = true;
  }

  successSignup() {
    this.showSignup = false;
  }

  cancelSignup() {
    this.showSignup = false;
  }

  showLoginModal() {
    this.showLogin = true;
  }

  successLogin() {
    this.showLogin = false;
  }

  cancelLogin() {
    this.showLogin = false;
  }

  get isLoggedIn(): boolean {
    return !!this.$store.state.user;
  }

  logout() {
    axios
      .post(APIConfig.buildUrl("/logout"), null, {
        headers: { token: this.$store.state.userToken }
      })
      .then(() => {
        this.$store.commit("logout");
        this.$router.push({ name: "home" });
      });
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
