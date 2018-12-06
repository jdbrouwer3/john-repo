// document.js

// my time & date. it works but it sucks

/* var header = document.createElement('header'); //creates header
header.innerHTML = '<h1>hello dom!</h1>';  //allows to write contect as html
//header.innerText = '<h1>hello dom!</h1>';

//document.body.innerHTML = header.innerHTML;
document.body.appendChild(header);


var main = document.createElement('main');
var d = new Date
main.innerHTML = '<div>' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()  + '</div> <div>' + (d.getMonth()+1) + '/' + d.getDate() +'/'+ d.getFullYear() + '</div>'
document.body.appendChild(main);

document.write("document write works") */

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// my second chance at time & date

var header = document.createElement('header');
header.innerHTML = '<h1>Time & Date!</h1>';

document.body.appendChild(header);

var main = document.createElement('main');


function date() {
  var div = document.createElement('div');
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var ampm = ..

  var month =
  var day =
  var year =

  arr1 = [];
  arr1.push(hour);
  arr1.push(minute);
  arr1.push(second);

  arr2 = [];
  arr2.push
  // div.innerText =

  return div;
}

for (var q = 0; q < 1; q += 1) {
  main.appendChild(date());
}


document.querySelector('header').append(main);




////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fred's 3 p's inside of 1 main, which is sibling to header:

// var header = document.createElement('header');
// header.innerHTML = '<h1>hello dom!</h1>';

// document.body.appendChild(header);
// document.body.appendChild(header);

// var main = document.createElement('main');


// function pElement() {
//   var p = document.createElement('p');
//   p.innerText = 'lorem ipsum';

//   return p;
// }

// for (var q = 0; q < 3; q += 1) {
//   main.appendChild(pElement());
// }


// document.querySelector('header').append(main);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
