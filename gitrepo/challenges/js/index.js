// submit this challenge and first challenge by friday

//compute the longest word of a given sentance:

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// var div = document.querySelector('#salutation');
// var button = document.querySelector('button');
// // var reset = document.querySelector('button[type="reset"]')
// var time = (new Date()).getHours();

// function message(msg) {
//   return time < 12 ? (`good morning, ${msg}`) : time < 18 ? (`good afternoon, ${msg}`) : (`good evening, ${msg}`);
// }

// function pushEvent() {
//   div.innerHTML = message(input.value);
// }

// function formEvent(evt) {
//   evt.stopPropagation(); //fast, but not fast enough
//   evt.preventDefault(); //faster than stopPropagation
//   div.innerHTML = message(input.value);
// }

// // button.addEventListener('click', pushEvent);
// reset.addEventListener('click', formEvent);
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// var sentence = prompt("Enter a sentence:")
// sentence = "I hate to code with the boss"
var sentence = document.querySelector('#text');
var div = document.querySelector('#longestWord');
var submit = document.querySelector('submit');

var s = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

var words = s.split(" ");



words.sort(function(a,b){
  return b.length - a.length;
});

var arr1 = [];
arr1.push(words[0]);
i = 0;
while (words[i].length == words[i+1].length){
  arr1.push(words[i+1]);
  i += 1;
}


function pushEvent() {
  div.innerHTML = arr1;
}
// document.write(`The longest word(s) is: ${arr1}.`)
// div.innerHTML = arr1;

button.addEventListener('click', pushEvent);


/* console.log("Your sentence: " + sentence);

console.log(words);

console.log("Your longest word: " + arr1); */







////////////////////////////////////////////////////////////////////

// Fred's solution
// use a sort function
// what is the bigger question here?

// split  -  break it apart

// listing

// sorting  -  order it

