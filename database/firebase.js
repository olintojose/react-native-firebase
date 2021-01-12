import firebase from 'firebase'

import 'firebase/firestore'



var firebaseConfig = {
  apiKey: "AIzaSyCIm-1GqAthtb9rg03JRrtWG-jJQsjs9iA",
  authDomain: "react-native-firebase-a1794.firebaseapp.com",
  projectId: "react-native-firebase-a1794",
  storageBucket: "react-native-firebase-a1794.appspot.com",
  messagingSenderId: "586267939445",
  appId: "1:586267939445:web:a536cfe3482b4117ddde3c"
}

firebase.initializeApp(firebaseConfig)

const db= firebase.firestore()

export default {
    firebase,
    db,
}