"use strict";

(function(){
  function data_Service($http) {
    var _data_Service_ = {};

    _data_Service_.getItems = function() {
      return $http.get('/api/items');
    }

    _data_Service_.getOneItem = function(itemId) {
      return $http.get('/api/item/' + itemId);
    }
    

    return _data_Service_;
  }

  angular
    .module('miSuperApp')
      .factory('data_Service', data_Service);

})();