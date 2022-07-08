<template>
  <li class="main-nav-li">
    <a href="#">
      <i class="material-icons-outlined" aria-hidden="true"
        >play_circle_outline</i
      >
      Get started
    </a>
    <nav class="sidebar-secondary-nav">
      <header class="secondary-nav-header">Get started</header>
      <ul class="secondary-nav-ul">
        <li class="secondary-nav-li group">
          <a href="#">Second level (li.group)</a>
          <ul aria-expanded="true">
            <li class="nav-leaf">
              <a href="#">li.nav-leaf</a>
            </li>
            <li class="nav-leaf">
              <a href="#">li.nav-leaf</a>
            </li>
            <li class="nav-leaf">
              <a href="#">li.nav-leaf</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const class_template = "payment-icon payment-icon-huge payment-icon-";
const dg = require("@swedbankpay/design-guide");

export default defineComponent({
  name: "Sidebar-Nav-Element",
  mounted() {
    console.log("nav element mounted");
  },
});
</script>

<style scoped></style>
