// Using IIFE (inmediately invoked function expression) to avoid namespace conflicts

(function () {

  angular
    .module('app', []);

  // MainCtrl.js
  function MainCtrl () {

  }

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  // SomeService.js
  function SomeService () {

  }

  angular
    .module('app')
    .service('SomeService', SomeService);

  // ...

})();


// Using controllerAs sintax

<div ng-controller="MainCtrl as vm">
  {{ vm.someObject }}
</div>

...

function MainCtrl () {
  this.someObject = {}; // using 'this' instead of $scope
  this.doSomething = function () {

  };
}
