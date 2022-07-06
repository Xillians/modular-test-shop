<template>
  <div class="container-fluid" v-if="loggedIn">
    <div class="row">
      <div id="sidebar-instruments" class="sidebar">
        <nav class="side-bar-main-nav">
          <img src="https://cdn-icons-png.flaticon.com/128/5359/5359828.png" />
        </nav>
        <nav class="side-bar-main-nav">
          <img src="https://cdn-icons-png.flaticon.com/128/5359/5359828.png" />
        </nav>
        <nav class="side-bar-main-nav">
          <img src="https://cdn-icons-png.flaticon.com/128/5359/5359828.png" />
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar-Instruments",
  props: ["loggedIn"],
});
</script>
