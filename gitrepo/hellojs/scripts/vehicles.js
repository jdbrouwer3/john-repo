

/* function vehicleForm() { //constructor function
  this.wheels = null;
}

var car = new vehicleForm();
car.wheels = 4

var bike = new vehicleForm();
bike.wheels = 2;

var unicycle = bike.constructor;
unicycle.wheels = 1;

console.log('Create a bike from a car knowing both are vehicles')
console.log(car);
console.log(bike);
console.log(unicycle); */

///////////////////////////

function Vehicle () {}

var car = new Vehicle();
var car2 = Vehicle();  //Vehicle right now doesn't give anything. It is undefined. 
var Bicycle = car.constructor;
var Unicyle = Bicycle;
