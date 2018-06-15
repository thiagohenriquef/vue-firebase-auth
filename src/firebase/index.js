import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDOVb82cKtWKTKjjvONc0Ai0hSexiM6Yp8',
  authDomain: 'vue-firebase-auth-49803.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-49803.firebaseio.com',
  projectId: 'vue-firebase-auth-49803',
  storageBucket: 'vue-firebase-auth-49803.appspot.com',
  messagingSenderId: '867100127963'
}

firebase.initializeApp(config)
firebase.auth().languageCode = 'pt-br'

export default firebase
