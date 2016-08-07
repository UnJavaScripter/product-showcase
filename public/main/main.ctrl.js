"use strict";

(function(){
  function main_Ctrl(data_Service) {

    var vm = this;

    data_Service.getItems().then(function(response) {
      vm.items = response.data;
    })
  }

  angular
    .module('miSuperApp')
      .controller('main_Ctrl', main_Ctrl);

})();