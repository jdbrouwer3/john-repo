import { appGet, appPost } from "./scripts/addUser.js";

// function storeUsername() {
//   sessionStorage.setItem("username", document.getElementById("username").value)
//   location.href = "index.html";
// }

// window.onload = function printUsername() {
//   var x = sessionStorage.getItem("username");
//   if (x == null) {
//     document.getElementById("printUsername").innerText = ("Login / Sign Up");
//   } else {
//     document.getElementById("printUsername").innerText = ("Welcome, " + x);
//   }
// }

// 'use strict'

// appGet('https://localhost:5001/api/user/', (data) => {
//   document.querySelector('#printUsername').innerHTML = data[4].text;
// });

appPost('https://localhost:5001/api/user', { username: 'keith', password: 'urban'}, (data) => {
  document.querySelector('#newUsername').innerHTML = data[data.length - 1].username;
})
