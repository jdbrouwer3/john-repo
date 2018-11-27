//object.js

var obj1 = {}; //empty literal object
var humanoid = {
  head: null, //property of humanoid
  torso: null,
  arms: 2,
  legs: 2
}; //literal object

console.log(humanoid.arms);

obj1.firstName = 'fred';
obj1.lastName = 'belotte';

console.log(obj1);

var humanoid2 = humanoid;

humanoid2.arms = 4;

console.log(humanoid.arms);
console.log(humanoid2.arms);
