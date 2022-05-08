
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAG3e4DL_Oxs8oLVHo5Iv2S8IGlOOs6Lyk",
    authDomain: "kwitter-86da4.firebaseapp.com",
    databaseURL: "https://kwitter-86da4-default-rtdb.firebaseio.com",
    projectId: "kwitter-86da4",
    storageBucket: "kwitter-86da4.appspot.com",
    messagingSenderId: "1055374187549",
    appId: "1:1055374187549:web:61b5ad56f6dd3182e53af4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({
          purpose : "database"

      });

      document.getElementById("user_name").value="";
  }