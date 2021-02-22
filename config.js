import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB9Bz5Q4LowxNpiSS5P2vQgSOYluOK3Eis",
    authDomain: "story-hub-fc309.firebaseapp.com",
    projectId: "story-hub-fc309",
    storageBucket: "story-hub-fc309.appspot.com",
    messagingSenderId: "477890411388",
    appId: "1:477890411388:web:2e73b9632bb6f0dc6fc2f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();