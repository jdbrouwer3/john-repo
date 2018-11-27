//function.js

var varany = 'fred';
var varsome = 'fred';

//function expression
var f1 = function() {
  var varf1 = 'fred';
  var varany = 100;
  varsome = 1000;
  console.log('f1 is called');
}

//function statement
function f2() {
  console.log('f2 is calling');
}


//function anonymous function arrow: =>
//its scope is the document without creating its own
var f3 = () => {
  console.log('f3 is magic');
}

//function iife: (invoke function expression)
(function () {
  console.log('f4 is skynet');
})()


f1();
f2();
f3();
console.log(varany);
console.log(varsome);


