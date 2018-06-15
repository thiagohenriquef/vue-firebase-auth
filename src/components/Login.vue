<template>
  <div class="login">
    <h2>{{ msg }}</h2>
    <input
      type="text"
      placeholder="Email"
      v-model="email"> <br>
    <input
      type="password"
      @keyup.enter="login"
      placeholder="Password"
      v-model="password"> <br>
      <button
      @click="login"> Login </button>
    <h3>or</h3>
    <button @click="$router.push({ name: 'signup' })"> Create an account </button>
    <button @click="signInWithGoogle"> Sign in with Google </button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Do Login',
      email: '',
      password: ''
    }
  },
  methods: {
    signInWithGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(({ user }) => this.successLogin(user))
        .catch(err => alert(err))
    },
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(({ user }) => this.successLogin(user))
        .catch(err => alert(err))
    },
    successLogin (obj) {
      Object.keys(obj).forEach(el => {
        localStorage.setItem(el, obj[el])
      })
      this.$router.push({ name: 'hello' })
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
