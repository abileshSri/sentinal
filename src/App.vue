<template>
  <div>
    <div id="app">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script>
const default_layout = "no-sidebar";
export default {
  name: "App",
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
@import url("https://fonts.googleapis.com/css?family=Exo:400,700");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");
@import url("https://fonts.googleapis.com/css?family=Titillium+Web&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
html,
body {
  scroll-behavior: smooth;
}

#app {
  scroll-behavior: smooth;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.table-header-bg {
  font-size: 14px;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  color: #ffffff !important;
  background-color: #6192b1 !important;
  /* border-color: #6192b1 !important; */
}
.table-body-bg {
  font-size: 12px;
  font-weight: normal;
  font-family: "Lato", sans-serif;
  color: #000000 !important;
  background-color: #f8f8f8 !important;
  /* border-color: #6192b1 !important; */
}
.modal-xl {
  max-width: 88% !important;
  margin-left: 135px !important;
  margin-top: 75px !important;
}
.v-application--wrap{
  min-height: max-content !important;
}
</style>
