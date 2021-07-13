var firebaseConfig = {
  apiKey: "AIzaSyCXzhtwlLzYDtYgqw49R-b_irWNLODLMwQ",
  authDomain: "kwitter-9f5c9.firebaseapp.com",
  databaseURL: "https://kwitter-9f5c9-default-rtdb.firebaseio.com",
  projectId: "kwitter-9f5c9",
  storageBucket: "kwitter-9f5c9.appspot.com",
  messagingSenderId: "375494067261",
  appId: "1:375494067261:web:654d03f0d10c22b4b7d654"
};
firebase.initializeApp(firebaseConfig);

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
Purpose:"Adding a Room"

})

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names-" + Room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

