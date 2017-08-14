import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyqHeGbVxYnXNKrAbtkJ8tkopm76W0kvw",
  authDomain: "mauro-made-it.firebaseapp.com",
  databaseURL: "https://mauro-made-it.firebaseio.com",
})
export const db = firebaseApp.database().ref('{{ name }}')
export const Auth = firebase.auth()
