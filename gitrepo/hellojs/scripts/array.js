//array.js

var arr1 = [];
var num1 = [0,1,2,3,4,5,6,7,8,9]
var chr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


//working with arrays
// adding / pushing 0-9
var arr2 = []

for(var s = 0; s < 10; s +=1) {
  arr2.push(s);
}

console.log(arr2);

///////////////////////////////////
// adding / pushing a-z
var arr3 = []

for(var q = 97 ; q < 123; q += 1) {
  arr3.push(String.fromCharCode(q));
}

console.log(arr3);

/////////////////////////////////////
// removing / poping

// for (var s = 0; s < 10; s +=1) {
//   arr2.pop(s);
// }

// console.log(arr2);


// for(var q = 97 ; q < 123; q += 1) {
//   arr3.pop(String.fromCharCode(q));
// }

// console.log(arr3);

//////////////////////////////////////
// function to pop / clear:
function clear(arr) {
  for (var s = 0; s < arr.length; s += 1) {
  // for (var s = 0; s < 10; s += 1) {
    arr.pop();
  }
}

console.log('length of arr2 before clear: ' + arr2.length)
clear(arr2);
console.log('length of arr2 after clear: ' + arr2.length)
console.log(arr2);

////////////////////////////////////////
// my stack - LIFO

var arr4 = ["orange", 'green', 'blue'];
function addStack(arr, val) {
  arr.push(val)
}

function remStack(arr) {
  last = arr.pop()
}

addStack(arr4, 'red');
console.log(arr4);
remStack(arr4);
console.log(arr4);
console.log(last);

///////////////////////////////////////////
// fred's stack - stack doesn't know about the array, in and out does. that's a good thing.

var stack = (function () {
  var arr = []

  function push(val) {
    arr.push(val);
  }

  function pop() {
    return arr.pop();
  }

  return {
    in: push,
    out: pop
  }
})();

stack.in('fred');
stack.in('belotte');
console.log(stack.out());
console.log(stack.out());

/////////////////////////////////////
//adding to array:

var arr6 = [];
arr6[100] = 1; //101 elements. the first 100 are undefined. the l01st element is arr[100] & has value 1.

// assigning variable the value of an element of an array:
var index100 = arr6[100];

// array containing an array:
var arr7 = [[],[[,1]]];

//array can hold all types
var arr8 = ['fred', '2018', true, null, undefined, Symbol, function() {}, {}, []];
var arr9 = ['fred', 'belotte', 'john', 'brouwer', 'joe', 'smith', 'a', 'b', '1', '2', '3', '4']
arr9.splice(3, 5, 10); //starts at index 4 and stops before index 5, and adds '10'
console.log(arr9);

//////////////////////////////////////////
// my que:



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function nine() {

// }




//No Vowels

// for (i = 0; i <= chr1.length -1; i += 1) {
//   if ((chr1[i] !== 'a') || (chr1[i] !== 'e') || (chr1[i] !== 'i') || (chr1[i] !== 'o') || (chr1[i] !== 'u')) {
//     console.log(chr1[i]);
//   }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//print pattern
// for (var m = 0; m <= 5; m += 1) {
//   console.log(m);
// }

// for (var w = 0, z = 0; w < num1.length, z < chr1.length; w += 1,  z+= 1) {
//   console.log(num1[w + 1] + chr1[z]);

//   if (w == 9) {
//     for (var k = 0; k < num1.length; )
//   }
// }

// var n = 0;
// while(n <= 5) {
//   console.log(n)
//   n += 1
// }

// var o = 6;
// do {
//   console.log(o)
// } while (o<=5)

// for(var x = 0; x < num1.length; x +=1) {
//   console.log(num1[x])
// }

// for(var q = 0; q <= chr1.length; q +=1) {
//   console.log(chr1[q])
//   if (chr1[q] == 'm') {
//     break;
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////

//z to m in the order
// for(var x = chr1.length - 1; x >=0; x-=1) {
//   console.log(chr1[x])
//   if (chr1[x] == 'm') {
//     break;
//   }
// }




///////////////////////////////////////////////////////////////////////////////////////////////

// printt the a1b2...z26 pattern
//console.log(arr3[0]+arr2[1])

// for(i=0; i<=25; i++) {
//   console.log(arr3[i])
// }

// for(i=0; i < num1.length; i += 1) {
//   for(j=0; j < num1length; j += 1){
//     console.log(arr2[i] + arr2[j])
//   }
// }

// console.log(arr2[0:-1]);

//
/////////////////////////////////////////////////////////////////////////////////////////////////
