<template>
  <div class="container-fluid">
    <div class="row">
      <div id="dg-sidebar" class="sidebar">
        <nav class="sidebar-main-nav">
          <ul class="main-nav-ul">
            <li class="main-nav-li active">
              <a href="#">
                <i class="material-icons-outlined" aria-hidden="true">home</i>
                Home Page
              </a>
            </li>
            <sidebar-nav-element/>
          </ul>
        </nav>
      </div>
      <main class="col main-content">Main content things...</main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarNavElement from '../Atoms/SidebarNavElement.vue';
const class_template = "payment-icon payment-icon-huge payment-icon-";
const dg = require("@swedbankpay/design-guide");

export default defineComponent({
  name: "Sidebar-Instruments",
  components: {
    SidebarNavElement
  },
  data() {
    return {
      payment_li_class_list: [
        `${class_template}vipps`,
        `${class_template}swish`,
        `${class_template}mobilepay`,
        `${class_template}trustly`,
        `${class_template}applepay`,
      ],
    };
  },
  mounted() {
    dg.sidebar.init("dg-sidebar");
    console.log("sidebar mounted");
  },
});
</script>

<style scoped></style>
