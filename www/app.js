(function(){
'use strict'

angular.module('spacetime', [
  'ui.router',
  'events',
  'login',
  'profile'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');

  }
]);

})();