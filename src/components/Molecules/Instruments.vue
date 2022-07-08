<template>
  <div class="container-fluid">
    <div class="row">
      <div id="instrument-sidebar" class="sidebar">
        <nav class="sidebar-main-nav">
          <ul id="sidebar-element-list" class="main-nav-ul">
            <li class="main-nav-li active">
              <a id="home-button" href="#">
                <i id="home-page-button" class="material-icons-outlined" aria-hidden="true">home</i>
                Home Page
              </a>
            </li>
            <li
              v-for="(instrument) in payment_li_class_list"
              :key="instrument.name"
              class="main-nav-li"
            >
              <sidebar-nav-element :id="instrument.name" :img_source="instrument.image" />
            </li>
          </ul>
        </nav>
      </div>
      <main class="col main-content">Main content things...</main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarNavElement from "../Atoms/SidebarNavElement.vue";
const class_template = "payment-icon payment-icon-huge payment-icon-";
const dg = require("@swedbankpay/design-guide");

export default defineComponent({
  name: "Sidebar-Instruments",
  components: {
    SidebarNavElement,
  },
  data() {
    return {
      payment_li_class_list: [
        {
          name: "Vipps",
          image: `${class_template}vipps` 
        },
        {
          name: "Swish",
          image: `${class_template}swish`  
        },
        {
          name: "Mobile Pay",
          image: `${class_template}mobilepay` 
        },
        {
          name: "trustly",
          image: `${class_template}trustly` 
        },
        {
          name: "applePay",
          image: `${class_template}applepay` 
        },
      ],
    };
  },
  mounted() {
    dg.sidebar.init("instrument-sidebar");
    console.log("sidebar mounted");
  },
});
</script>

<style scoped></style>
