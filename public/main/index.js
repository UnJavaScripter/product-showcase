"use strict";

(function(){
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './main/main.html',
        controller: 'main_Ctrl',
        controllerAs: 'main'
      
      })
  }

  angular
    .module('miSuperApp')
      .config(config);

})();