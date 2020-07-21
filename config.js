import * as firebase from 'firebase'

require('@firebase/firestore')

if(!firebase.apps.length){ 

var firebaseConfig = {
    apiKey: "AIzaSyAGouptUcFiUlBerEysS2tfJweOEFZF9C4",
    authDomain: "book-santa-f1fa5.firebaseapp.com",
    databaseURL: "https://book-santa-f1fa5.firebaseio.com",
    projectId: "book-santa-f1fa5",
    storageBucket: "book-santa-f1fa5.appspot.com",
    messagingSenderId: "354633787265",
    appId: "1:354633787265:web:04ea0b25fa2a4e346eaa80"
  };
}
firebase.initializeApp(firebaseConfig); 
export default firebase.database()