(function(){
'use strict'

angular.module('spacetime')
  
  .directive('eventForm', [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/event-form.html',
      link: function(scope, element, attrs) {
        scope.formSubmitted = false;

        scope.submitEvent = function(event) {
          event.preventDefault();
          console.log(scope.createEvent);
          scope.formSubmitted = true;
          debugger;
        };
      }
    };
  }]);

})();