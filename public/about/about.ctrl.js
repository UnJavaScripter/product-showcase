"use strict";

(function(){
  function about_Ctrl() {
    console.log("this is the controller of the about module");
  }

  angular
    .module('miSuperApp')
      .controller('about_Ctrl', about_Ctrl);

})();