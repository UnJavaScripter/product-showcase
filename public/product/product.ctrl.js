"use strict";

(function(){
  function product_Ctrl(data_Service, $routeParams) {

    var vm = this;
    
    data_Service.getOneItem($routeParams.id).then(function(response) {
      // Since our back end stores items with a random ID, there could be duplicates
      vm.item = response.data[0];
    })
  }

  angular
    .module('miSuperApp')
      .controller('product_Ctrl', product_Ctrl);

})();