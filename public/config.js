"use strict";

(function(){

  function config($routeProvider) {
    $routeProvider.otherwise('/');
  };

  angular.
    module('miSuperApp')
      .config(config)

})();