

function storeUsername() { 
  sessionStorage.setItem("username", document.getElementById("username").value)
  location.href = "index.html";
}

window.onload = function printUsername() {
  var x = sessionStorage.getItem("username");
  if (x == null) {
    document.getElementById("printUsername").innerText = ("Login");
  } else {
    document.getElementById("printUsername").innerText = ("Welcome, " + x);
  }

















    // sessionStorage.setItem("password", "password")

  // if (location == "index.html"){
  //   location = "index.html";
  // } else if (location.href == "login.html"){
  //   location = "login.html";
  // } else if (x == null) {
  //   location = "login.html";
  // } else {
  //   return;
  // }
}

// while (x == null) {

// }


