<template>
  <div>
    <navbar />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar";

export default {
  components: {
    navbar: Navbar
  }
};
</script>
