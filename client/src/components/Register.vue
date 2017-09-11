<template>
  <div class="register">
    <h4>Register</h4>
    <form @submit.prevent="register">
      <div class="form-group">
        <input type="text" class="form-control-small input-sm" v-model="userName" placeholder="Name" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control-small input-sm" v-model="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control-small input-sm" v-model="password" placeholder="Password" required>
      </div>
      <button class="btn btn-primary" type="submit">Register</button>
    </form>
    <p>Already a member?
      <router-link to="/login">Log in</router-link>.</p>
  </div>
</template>


<script>
export default {
  name: 'register',
  data() {
    return {
      userName: '',
      email: '',
      password: ''
    }
  },
  computed: {},
  methods: {
    register() {
      this.$store.dispatch('register', { userName: this.userName, email: this.email, password: this.password })
    }
  },
  components: {}
}
</script>


<style scoped>
</style>
