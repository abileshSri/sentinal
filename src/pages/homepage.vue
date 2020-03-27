<template>
  <div>
    <h1>Click Button to Login</h1>
    <w-button-input :buttonStyle="'loginButon'" :buttonText="'LOGIN'" @onButtonClick="goToNextPage()" />
  </div>
</template>
<script>
import ButtonInput from "../widgets/ButtonInput.vue";
export default {
  props: [],
  components: { "w-button-input": ButtonInput },
  watch: {},
  computed: {},
  created() {},
  data() {
    return {};
  },
  methods: {
    goToNextPage() {
      this.$router.push("/falconview");
    }
  }
};
</script>

<style scoped>
</style>