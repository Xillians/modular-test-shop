<template>
  <header class="topbar topbar-xl-wide topbar-sticky" id="topbar">
    <img
      src="https://design.swedbankpay.com/v/10.1.0/img/logo/swedbankpay-logo-h.svg"
      alt="Swedbank Pay horizontal logo"
      class="logotype-horizontal logotype-lg"
    />
  </header>
  <Login @onUserLoggedIn="userLoggedIn = $event" />
  <instruments v-if="userLoggedIn" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "./components/Molecules/Login.vue";
import Instruments from "./components/Molecules/Instruments.vue";

@Options({
  components: {
    Login,
    Instruments,
  },
  data() {
    return {
      userLoggedIn: false,
    };
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
