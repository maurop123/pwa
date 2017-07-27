import firebase from 'firebase'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "", 
}

const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
export const Auth = firebase.auth()
