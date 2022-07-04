<template>
  <header class="topbar" id="topbar">
    <img
      src="https://design.swedbankpay.com/v/10.1.0/img/logo/swedbankpay-logo-h.svg"
      alt="Swedbank Pay horizontal logo"
      class="logotype-horizontal logotype-lg"
    />
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
