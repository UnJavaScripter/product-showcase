"use strict";

(function(){
  function config($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: './about/about.html',
        controller: 'about_Ctrl',
        controllerAs: 'about'
      
      })
  }

  angular
    .module('miSuperApp')
      .config(config);

})();