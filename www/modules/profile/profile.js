(function(){
'use strict'

var ProfileCtrl = function(){

};

angular
  .module('profile', [])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'modules/profile/profile.html',
        controllerAs: 'profile',
        controller: ProfileCtrl
      });

  }])

  .controller('ProfileCtrl', [
    ProfileCtrl
  ]);

})();