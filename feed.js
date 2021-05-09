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
function feed() {
    input_store = document.getElementById("create_feed").value;
    document.getElementById("trending-feed").innerHTML = input_store + "<br>" + " <button id='like_button' onclick='likee()'>Like👍 </button> " +"<br>" + "<span id='like'>Likes - </span>" + "<span id='showlike'></span>" + "<span id='like'>Views -</span>" + "<span id='showview'><span>";
}

function likee() {
    like = 0;
    like = like + 1;
    document.getElementById("showlike").innerHTML = like;
    
    view = 0;
    view = view + 1;
    document.getElementById("showview").innerHTML = view;
    
    
}

