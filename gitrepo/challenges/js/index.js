// submit this challenge and first challenge by friday

//compute the longest word of a given sentance:


var sentence = prompt("Enter a sentence:")

var s = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

var words = s.split(" ");


words.sort(function(a,b){
  return b.length - a.length;
});


console.log("Your sentence: " + sentence)

console.log("Your longest word: " + words[0]);







////////////////////////////////////////////////////////////////////

// Fred's solution
// use a sort function
// what is the bigger question here?

// split  -  break it apart

// listing

// sorting  -  order it

