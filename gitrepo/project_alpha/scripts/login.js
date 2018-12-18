

function storeUsername() {
  sessionStorage.setItem("username", document.getElementById("username").value)
  location.href = "index.html";
}

window.onload = function printUsername() {
  var x = sessionStorage.getItem("username");
  if (x == null) {
    document.getElementById("printUsername").innerText = ("Login / Sign Up");
  } else {
    document.getElementById("printUsername").innerText = ("Welcome, " + x);
  }


//////////////////////////////////////////////////////////////////////////////////



  // function ajax(id) {
  //   var url = id ? `https://localhost:5001/api/user/${id}` : 'https://localhost:5001/api/user'
  //   fetch(url).then((response) => {
  //     response.json().then(display);
  //   }, (error) => {
  //     console.error(error);
  //   })
  // }

  // function display(data) {
  //   var div = document.querySelector('#userlist');






  // while (x == null) {
  //   if (location == "index.html"){
  //     location = "index.html";
  //   } else if (location == "login.html"){
  //     location = "login.html";
  //   } else if (x == null) {
  //     location = "login.html";
  //   } else {
  //     return;
  //   }
  // }

  // while (x == null) {
  //   if (location.href == "index.html"){
  //     location = "index.html";
  //   } else if (location.href == "login.html"){
  //     location = "login.html";
  //   } else if (x == null) {
  //     location = "login.html";
  //   } else {
  //     return;
  //   }
  // }

}

















    // sessionStorage.setItem("password", "password")







