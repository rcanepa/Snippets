/**********************
Modules
**********************/

// Opt1
var Module = (function () {
	var publicVar = 'I am public!';
	var _privateVar = 'XXX';
	return {
		myMethod: function () {
			console.log('myMethod has been called.');
		},
		exposePrivate: function(){
			console.log('This is the value of my privateVar: '+ _privateVar);
		},
		publicVar: publicVar
	};
})();

Module.myMethod(); // myMethod has been called.

Module.exposePrivate(); // 'This is the value of my privateVar: I am public!

console.log(Module._privateVar); // undefined

// Another option returning a locally scoped object
var Module3 = (function () {

	// locally scoped Object
	var myObject = {};

	// declared with `var`, must be "private" 
	var _privateMethod = function () {};

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

// Extending modules
var Module = (function () {

  var _privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

// We pass the obj Module to the ModuleTwo function
var ModuleTwo = (function (Module) {
    
    Module.extension = function () {
        // another method!
    };
    
    return Module;
    
})(Module || {}); // preventing problems if Module is undefined

console.log(Module); // Object {someMethod: function, anotherMethod: function, extension: function}

// Loose Augmentation Pattern
var MODULE = (function (my) {
	// add capabilities...

	return my;
}(MODULE || {}));

// Creating sub-modules
MODULE.sub = (function () {
	var my = {};
	// ...

	return my;
}());

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

/**********************
Validating callbacks
**********************/

callback = (typeof callback === 'function') ? callback : function() {};

/**********************
Extending the console
**********************/

var slice = Array.prototype.slice;

function logger(namespace) {
  return function(){
      console.log.apply(console, [namespace].concat(slice.call(arguments)));
  }
}

module.exports = logger;

var out = logger('WARN:');

out('Blah!');

/**********************
Passing data to callbacks
**********************/

// The solution is the binding of variables through closure.

var doSomething = function(extraStuff) {
    return function(data, textStatus, jqXHR) {
        // do something with extraStuff
    };
};

// Example

var clicked = function() {
    var extraStuff = {
        myParam1: 'foo',
        myParam2: 'bar'
    }; // an object / whatever extra params you wish to pass.

    $.post("someurl.php", someData, doSomething(extraStuff), "json");
};
