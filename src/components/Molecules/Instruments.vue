<template>
  <div class="container-fluid" v-if="loggedIn">
    <div class="row">
      <nav id="sidebar-instruments" class="sidebar side-bar-main-nav">
        <ul class="list">
          <li
            v-for="(instrument, idx) in payment_li_class_list"
            :key="idx"
            id="instrument-list"
          >
            <i :class="instrument" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const class_template = "payment-icon payment-icon-huge payment-icon-";
export default defineComponent({
  name: "Sidebar-Instruments",
  props: ["loggedIn"],
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
});
</script>
