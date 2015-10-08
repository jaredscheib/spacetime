(function(){
'use strict'

var LoginCtrl = function($state, LoginService, UserData){

};

angular
  .module('login', [])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'modules/login/login.html',
        controllerAs: 'login',
        controller: 'LoginCtrl'
      });

  }])

  .controller('LoginCtrl', [
    // '$state',
    // 'LoginService',
    // 'UserData',
    LoginCtrl // named rather than anonymous function so we can trace errors effectively
  ]);


})();