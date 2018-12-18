import { appGet, appPost } from "./scripts/addUser.js";

'use strict'

// appGet('https://localhost:5001/api/user/', (data) => {
//   document.querySelector('#newUsername').innerHTML = data[data.length - 1].username;
// });




// var signUpForm = document.querySelector('#signUpBtn');
// signUpForm.addEventListener('button', appPost());

// appPost('https://localhost:5001/api/user', { username: un , password: pw }, (data) => {
//   document.querySelector('#newUsername').innerHTML = data[data.length - 1].username;
// })

var signUpButton = document.querySelector('#signUpBtn');
signUpButton.addEventListener('click', () => {
  var un = document.querySelector('#setUsername').value;
  var pw = document.querySelector('#confirmPassword').value;
  appPost('https://localhost:5001/api/user', { username: un , password: pw }, (data) => {
    document.querySelector('#newUsername').innerHTML = data[data.length - 1].username;
  });
});




// trying with query selector
// var signUpForm = document.querySelector('#signUpBtn');
// signUpForm.addEventListener('button', appPost());

// appPost('https://localhost:5001/api/user', { username: querySelector('#setUsername'), password: querySelector('#confirmPassword') }, (data) => {
//   document.querySelector('#newUsername').innerHTML = data[data.length - 1].username;
// })


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
