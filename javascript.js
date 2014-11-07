
// Sleep function for javascript
function sleep(miliseconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliseconds);
}

sleep(1000);

// ------------------------------------------------------------------- //

// Prototype silly example
var Vehicle = function(){};

Vehicle.prototype.drive = function(){
  console.log('vroooom');
}

var Car = function(){};

// Car uses the Vehicle prototype
Car.prototype = new Vehicle();

// Car unique method
Car.prototype.honk = function(){
  console.log('honk hoooonk');
}

var Bike = function(){};

// Bike also uses the Vehicle prototype
Bike.prototype = new Vehicle();

// Bike unique method
Bike.prototype.ring = function(){
  console.log('ring riiiing');
}

var myCar = new Car();
var myBike = new Bike();

myCar.drive(); // vroooom
myCar.honk(); // honk hoooonk
myCar.ring(); // TypeError: undefined is not a function

myBike.drive(); // vroooom
myBike.ring(); // ring riiiing
myBike.honk(); // TypeError: undefined is not a function
// ------------------------------------------------------------------- //

