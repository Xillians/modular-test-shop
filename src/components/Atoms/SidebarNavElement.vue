<template>
  <li class="main-nav-li">
    <a href="#">
      <i :id="'payment-option-'+id" :class="img_source" aria-hidden="true" />
    </a>
    <nav class="sidebar-secondary-nav">
      <header :id="'header-'+id" class="secondary-nav-header">{{id}}</header>
      <ul class="secondary-nav-ul">
        <li 
              v-for="(flow, idx) in flows"
              :key="idx"
              class="secondary-nav-li group">
          <a :id="id+' '+flow" href="#">{{flow}}</a>
        </li>
      </ul>
    </nav>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar-Nav-Element",
  mounted() {
    console.log("nav element mounted");
  },
  data() {
    return {
      flows: [
        "recur",
        "reverse",
        "cancel",
        "capture"
      ]
    }
  },
  props: ["id", "img_source"],
});
</script>

<style scoped></style>
