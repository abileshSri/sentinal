<template>
  <model-select
    :options="options"
    v-model="defaultDropdownValue"
    :placeholder="placeholder"
    @change="selectedOption($event)"
  ></model-select>
</template>
<script>
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  props: ["options", "defaultDropdownValue", "placeholder"],
  computed: {},
  components: {
    ModelSelect
  },
  methods: {
    selectedOption(event) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].value == event) {
          console.log("Selected Value", event);
          console.log("Selected Value", this.options[i].text);
          this.$emit("onSelectedValue", {
            text: this.options[i].text,
            value: event
          });
        }
      }
    }
  }
};
</script>