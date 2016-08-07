"use strict";

(function(){
  function config($routeProvider) {
    $routeProvider
      .when('/product/:id', {
        templateUrl: './product/product.html',
        controller: 'product_Ctrl',
        controllerAs: 'product'
      
      })
  }

  angular
    .module('miSuperApp')
      .config(config);

})();