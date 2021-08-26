var firebaseConfig = {
    apiKey: "AIzaSyDtTJ3-uv-azHXqu1ZUEYts-aaoqVf6Dxg",
    authDomain: "lets-chat-d1713.firebaseapp.com",
    databaseURL: "https://lets-chat-d1713-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d1713",
    storageBucket: "lets-chat-d1713.appspot.com",
    messagingSenderId: "473299529036",
    appId: "1:473299529036:web:a098fdc0df49d8b87533e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}
