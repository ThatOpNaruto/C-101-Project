var firebaseConfig = {
    apiKey: "AIzaSyACxYbyy5-TbRtqnm7NCBts6VngmsEP5UE",
    authDomain: "kwitter-2fde0.firebaseapp.com",
    databaseURL: "https://kwitter-2fde0-default-rtdb.firebaseio.com",
    projectId: "kwitter-2fde0",
    storageBucket: "kwitter-2fde0.appspot.com",
    messagingSenderId: "232097774664",
    appId: "1:232097774664:web:6c201fe38b948e30eeec7d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}