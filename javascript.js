
// Sleep function for javascript
function sleep(miliseconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliseconds);
}

sleep(1000);

// ------------------------------------------------------------------- //

// Prototype silly example (emulating the tradition OOP inheritance)
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
};

var Bike = function(){};

// Bike also uses the Vehicle prototype
Bike.prototype = new Vehicle();

// Bike unique method
Bike.prototype.ring = function(){
  console.log('ring riiiing');
};

var myCar = new Car();
var myBike = new Bike();

myCar.drive(); // vroooom
myCar.honk(); // honk hoooonk
myCar.ring(); // TypeError: undefined is not a function

myBike.drive(); // vroooom
myBike.ring(); // ring riiiing
myBike.honk(); // TypeError: undefined is not a function

// Inheritance through Object.create() (classless example)
Object.create = function(o){
  var F = function(){};
  F.prototype = o;
  return new F();
};

var vehicle = {};
vehicle.drive = function(){
  console.log('vroooom');
};

var car = Object.create(vehicle);
car.honk = function(){
  console.log('honk hoooonk');
};

var myCar = Object.create(car);

myCar.honk(); // honk hoooonk
myCar.drive(); // vroooom

// ------------------------------------------------------------------- //

