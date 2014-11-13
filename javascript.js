/**********************
Modules
**********************/

// Opt1
var Module = (function () {
	var publicVar = 'I am public!';
	var privateVar = 'XXX';
	return {
		myMethod: function () {
			console.log('myMethod has been called.');
		},
		exposePrivate: function(){
			console.log('This is the value of my privateVar: '+ privateVar);
		},
		publicVar: publicVar
	};
})();

Module.myMethod(); // myMethod has been called.

Module.exposePrivate(); // 'This is the value of my privateVar: I am public!

console.log(Module.privateVar); // undefined

// Another option returning a locally scoped object
var Module3 = (function () {

	// locally scoped Object
	var myObject = {};

	// declared with `var`, must be "private"
	var privateMethod = function () {};

	myObject.someMethod = function () {
	// take it away Mr. Public Method
		console.log('Hi Renzo!');
	};

	return myObject;

})();

Module3.someMethod();

// Revealing module pattern
var Module2 = (function () {
	var _privateMethod = function () {

	};
	var publicMethod = function () {
		console.log('Blah');
	};
	var anotherPublicMethod = function () {
		console.log('BlahBlah');
	};

	return {
		publicMethod: publicMethod,
		anotherPublicMethod: anotherPublicMethod
	}
})();

Module2.publicMethod();

/**********************
Sleep function for javascript
**********************/

function sleep(miliseconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliseconds);
}

sleep(1000);

/**********************
Prototyping
**********************/

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
/*
Object.create = function(o){
  var F = function(){};
  F.prototype = o;
  return new F();
};
*/

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

