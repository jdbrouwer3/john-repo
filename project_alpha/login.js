

function storeUsername() {
  sessionStorage.setItem("username", document.getElementById("username").value)

  sessionStorage.setItem("password", "password")

  location.href = "index.html";
}

window.onload = function printUsername() {
  var x = sessionStorage.getItem("username");
  if (x == null) {
    document.getElementById("printUsername").innerText = ("Login");
  } else {
    document.getElementById("printUsername").innerText = ("Welcome, " + x);
  }

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


