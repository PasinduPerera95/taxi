import * as  firebase from "firebase";
import "firebase/storage";
//import "firebase/storage";

 var firebaseConfig = {
   apiKey: "AIzaSyAYXFrMRK7hl9s6pN9u466FxE0tNCqJcyQ",
   authDomain: "my-second-project-8fce5.firebaseapp.com",
   databaseURL: "https://my-second-project-8fce5.firebaseio.com",
   projectId: "my-second-project-8fce5",
   storageBucket: "my-second-project-8fce5.appspot.com",
   messagingSenderId: "294754900394",
   appId: "1:294754900394:web:2bfb0d5a28cd4614c633d3",
   measurementId: "G-BZ69PHFD53",
 };


//Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);
//export default fireDB.database().ref();

export default fireDB;


