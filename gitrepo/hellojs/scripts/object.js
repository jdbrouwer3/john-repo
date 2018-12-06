//object.js

var obj1 = {}; //empty literal object
var humanoid = {
  head: null, //property of humanoid
  torso: null,
  arms: 2,
  legs: 2
}; //literal object

/* console.log(humanoid.arms); */

obj1.firstName = 'fred';
obj1.lastName = 'belotte';

/* console.log(obj1); */

var humanoid2 = humanoid;

humanoid2.arms = 4;

/* console.log(humanoid.arms);
console.log(humanoid2.arms); */

var humanoid3 = Object.create(humanoid); //in the image of humanoid. This is a constructor

humanoid3.arms = 6;

/* console.log(humanoid.arms);
console.log(humanoid2.arms);
console.log(humanoid3.arms);
console.log(humanoid3.constructor);
console.log(humanoid3); */

function HumanoidDNA() { //constructor function
  this.head = null;
  this .torso = null;
  this.arms = 2;
  this.legs = 2;
}

var humanoid4 = new HumanoidDNA();
var humanoid5 = new HumanoidDNA();

console.log(humanoid4);
console.log(humanoid5.sense8);

//debugger;

HumanoidDNA.prototype.sense8 = 'magic';

var terminator = humanoid4.constructor; //
var terminator2 = HumanoidDNA
var terminoid = new terminator();
var terminoid2 = new terminator2();

humanoid4.brain = 1
humanoid5.brain = 2;

console.log(terminoid);
console.log(terminoid2);

