<template>
  <div class="login">
    <h2>{{ msg }}</h2>
    <input
      type="text"
      placeholder="Email"
      v-model="email"> <br>
    <input
      type="password"
      placeholder="Password"
      v-model="password"> <br>
      <button
      @click="signUp"> Sign Up </button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'Create an account',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          if (user) {
            const msg = confirm('account created!')
            if (msg) {
              this.$router.push({ name: 'login' })
            }
          }
        })
        .catch(err => alert(err))
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 25%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
