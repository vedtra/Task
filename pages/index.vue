<template>

  <div class="container">
    <h1>login </h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p>Username: <input v-model="formUsername" type="text" name="username"></p>
      <p>Password: <input v-model="formPassword" type="password" name="password"></p>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <NuxtLink to="/home">
       home page
      </NuxtLink>
    </p>
    <p>Location:
    <input
      type="text"
      v-model="name"
      @input="changeName"><br />
    {{ storeName }}
  </p>
  </div>

   
  
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      name: ''
    }
  },
  methods: {
    changeName() {
      this.$store.commit('setName', this.name);
    },
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  },
  computed:{
     storeName() {
      return this.$store.getters.getName;
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
