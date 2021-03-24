var firebaseConfig = {
    apiKey: "AIzaSyC1lFaSwPyjqGjycX3MpXGeweJFWxWUVmI",
    authDomain: "p-94-5218a.firebaseapp.com",
    projectId: "p-94-5218a",
    storageBucket: "p-94-5218a.appspot.com",
    messagingSenderId: "871874818975",
    appId: "1:871874818975:web:cd453d992a87a1b680c3aa"
  };

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "index.html";
}