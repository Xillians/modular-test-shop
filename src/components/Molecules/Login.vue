<template>
  <div id="login-component" v-if="!loggedIn">
    <h1>page title</h1>
    <div id="login-form" class="d-flex flex-column">
      <input-field
        class="align-self-center"
        :type="'text'"
        :label="'Email'"
        :name="'Email'"
        :placeholder="'some@example.com'"
        @onEmailUpdated="email = $event"
      />
      <input-field
        class="align-self-center"
        :type="'password'"
        :label="'Password'"
        :name="'Password'"
        :placeholder="'********'"
        @onPasswordUpdated="password = $event"
      />
      <button
        id="log-in-button"
        class="btn btn-primary align-self-center"
        v-on:click="submit_login()"
      >
        Log in
      </button>
    </div>
  </div>
</template>
<!-- filename: Authentication.vue -->
<script lang="ts">
import { defineComponent } from "vue";
import InputField from "../Atoms/inputs/inputField.vue";

export default defineComponent({
  name: "Login",
  components: { InputField },
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false,
    };
  },
  methods: {
    submit_login() {
      console.log("user logged in with", `${this.email} ${this.password}`);

      if (this.email && this.password) {
        this.loggedIn = true;
        this.$emit("onUserLoggedIn", this.loggedIn);
      }
    },
  },
});
</script>

<style scoped></style>
