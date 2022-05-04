<template>
  <div>
    
    <cv-form @submit.prevent="actionSubmit" v-if="!this.$store.state.isLoggedIn">
      <cv-text-input
        label="Login"
        helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
        placeholder="Username"
        v-model="username"
      >
      </cv-text-input>
      <cv-text-input
        label="Password"
        type="password"
        helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
        placeholder="Password"
        v-model="password"
      >
      </cv-text-input>
      <cv-button>Login</cv-button>
    </cv-form>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'LoginForm',
  components: {},
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    actionSubmit: function(e, a, b) {
      console.log(this.username);
      console.log(this.password);
      const payload = { username: this.username, password: this.password };
      const response = axios
        .post(this.$store.state.apiUrl + '/login.php', payload)
        .then(resp => {
          console.log(resp.data);
          if (resp.data.success == true) {
            store.commit("setLoggedIn", { logged: true });
          }
        }).catch(resp => {
          console.log(resp.data);
        });
    }
  }
};
</script>
