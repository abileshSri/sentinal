<template>
  <div class="login-card text-center">
    <b-form @submit.prevent>
      <div class="login-card-content pt-5 mt-5">
        <div class="form form-group mt-5 pt-5 pb-4 w-50 mx-auto">
          <div class="form-field username mx-auto w-75">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Username"
              id="username"
              v-model="form.username"
            />
          </div>
          <div class="form-field password mx-auto w-75">
            <input
              type="password"
              class="form-control mb-3"
              placeholder="Password"
              id="password"
              v-model="form.password"
            />
          </div>
          <button type="submit" class="btn btn-primary" @click="checkLoginUser()">LOGIN</button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    checkLoginUser() {
      if (this.form.username=='welcome' && this.form.password=='welcome@123') {
        this.$router.push("/falconview");
      } else {
        alert("Invalid UserName or Password");
      }
    }
  }
};
</script>

<style scoped>
.form {
  border: 1px solid lightgrey;
  box-shadow: 0 0 5px #00000030;
}
</style>
