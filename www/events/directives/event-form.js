(function(){
'use strict'

angular.module('spacetime')
  
  .directive('eventForm', ['$http', function($http) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/event-form.html',
      link: function(scope, element, attrs) {
        scope.formSubmitted = false;

        scope.submitEvent = function(e) {
          e.preventDefault();
          console.log('newEvent', scope.newEvent);
          scope.formSubmitted = true;

          $http({
            method: 'POST',
            url: '/events',
            data: scope.newEvent
          })
          .success(function(res){

          })
          .error(function(err){
            
          });
          debugger;
        };
      }
    };
  }]);

})();