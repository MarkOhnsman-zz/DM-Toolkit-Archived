<template>
  <div class="login">
    <h4>Login</h4>
    <p>{{message}}</p>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="email" class="form-control-small input-sm" v-model="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control-small input-sm" v-model="password" placeholder="Password" required>
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
    <p>Not a member?
      <router-link to="/register">Register</router-link>.</p>

  </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      message(){
        return this.$store.state.loginMessage
      }
    },
    methods: {
      login() {
      this.$store.dispatch('login', { email: this.email,  password: this.password })
    }
    },
    components: {}
  }

</script>


<style scoped>
a{
  color: white;
  font-weight: bold;
}
h4{
  color: black;
  font-weight: bold;
}
</style>