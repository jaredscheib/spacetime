(function(){
'use strict'

  angular.module('spacetime', [
    'ui.router'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: 'login',
          templateUrl: 'partials/login.html'
        })
        .state('events', {
          url: 'events',
          templateUrl: 'partials/events.html'
        })
        .state('profile', {
          url:'profile',
          templateUrl: 'partials/profile.html'
        });
    }
  ]);

})();