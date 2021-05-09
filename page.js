var firebaseConfig = {
  apiKey: "AIzaSyAnDnMGjxldpLkcMmnRXNJmIeRToA5x-Mg",
  authDomain: "kwittop-69587.firebaseapp.com",
  databaseURL: "https://kwittop-69587-default-rtdb.firebaseio.com",
  projectId: "kwittop-69587",
  storageBucket: "kwittop-69587.appspot.com",
  messagingSenderId: "674874715945",
  appId: "1:674874715945:web:82cc2d94795477a6ea5138",
  measurementId: "G-ZJZQ560683"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function room() {
  room_name = document.getElementById("create_room").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "yayay"
  })
  localStorage.setItem("create_room", room_name);
  window.location = "chat.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("trending-rooms").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      room_names = childKey;
      //Start code
      console.log("Room Name", room_names);
      row = "<div class='room_name' id=" + room_names + " onclick='redirectToRoomName(this.id)' >#" + room_names + "</div><hr>";
      document.getElementById("trending-rooms").innerHTML += row;
      //End code
    });
  });
}

getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat.html";
}
function logout() {
  localStorage.removeItem("user_name_local_project");
  localStorage.removeItem("room_name");
  localStorage.removeItem("mail_local_project")
  window.location = "index.html";
}