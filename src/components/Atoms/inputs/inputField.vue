<template>
  <div class="d-flex flex-column">
    <!-- Input: E mail -->
    <label for="name"> {{ label }} </label>
    <input
      :type="type"
      class="form-control"
      v-model="value"
      id="{{name}}"
      :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField",
  props: {
    type: String,
    label: String,
    name: String,
    placeholder: String,
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value: function () {
      const eventName = `on${this.label}Updated`;
      this.$emit(eventName, this.value);
    },
  },
});
</script>

<style scoped>
input {
  width: 250px;
}
</style>
