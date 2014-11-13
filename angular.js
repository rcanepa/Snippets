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
