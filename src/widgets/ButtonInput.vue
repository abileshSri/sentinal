<template>
  <button
    :class="getClass"
    :style="getStyle"
    @click="buttonClick"
    :disabled="disabled"
  >{{ buttonText }}</button>
</template>
<script>
export default {
  props: ["buttonText", "buttonStyle", "disabled"],
  computed: {
    getClass() {
      switch (this.buttonStyle) {
        case "loginButon":
          return "btn";
        case "clearFilterButton":
          return "btn mr-4";
        case "serachFilterButton":
          return "btn";
        default:
          return "btn btn-primary button-style";
      }
    },
    getStyle() {
      switch (this.buttonStyle) {
        case "loginButon":
          return "width: 100px; height: 40px; border-radius: 3px; border: solid 1px #e5e5e5; background-color: #e5e5e5; color: #000000; font-size: 14px; font-weight: normal;";
        case "clearFilterButton":
          return "width: 110px; height: 40px; border-radius: 3px; border: solid 1px #e5e5e5; background-color: #e5e5e5; color: #000000; font-size: 14px; font-weight: normal;";
        case "serachFilterButton":
          return "width: 110px; height: 40px; border-radius: 3px; border: solid 1px #e5e5e5; background-color: #e5e5e5; color: #000000; font-size: 14px; font-weight: normal;";
        default:
          return "";
      }
    }
  },
  methods: {
    buttonClick(event) {
      this.$emit("onButtonClick", event);
    }
  }
};
</script>
<style scoped>
.button-class-tab {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: white;
  border-radius: 0px;
  background-color: #1579ab;
}
.button-class-defaultTab {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  border-radius: 0px;
  border: solid 1px #1579ab;
  background-color: #f8f8f8;
  color: #1579ab;
}
</style>