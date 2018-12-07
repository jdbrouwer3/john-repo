//compute the longest word of a given sentance:

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Works with input in prompt and output in console log:

var sentence = prompt("Enter a sentence:")

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

console.log("Your sentence: " + sentence);
console.log("Your longest word: " + arr1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Trying to make it work with a form

/* var sentence = prompt("Enter a sentence:")
// sentence = "I hate to code with the boss"

// var sentence = document.querySelector('#text');
// var div = document.querySelector('#longestWord');
// var submit = document.querySelector('submit');

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

// button.addEventListener('click', pushEvent);


console.log("Your sentence: " + sentence);

// console.log(words);

console.log("Your longest word: " + arr1);
 */






////////////////////////////////////////////////////////////////////
