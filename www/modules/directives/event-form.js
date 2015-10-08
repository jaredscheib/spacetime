(function(){
'use strict'

angular
  .module('events')
  
  .directive('eventForm', ['$http', function(scope, $http) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'modules/directives/event-form.html',
      link: function(element, attrs) {
        scope.formSubmitted = false;
        scope.newEvent = {
          date: new Date()
        };

        scope.submitEvent = function(e) {
          e.preventDefault();
          debugger;
          scope.formSubmitted = true;
          $http.post('/api/events', scope.newEvent)
          .then(function(res){
            scope.events.push(scope.newEvent);
          }, function(err){
            console.log('Error on POST request when trying to submit event:', err.code);
            scope.formSubmitted = false;
          });
        };
      }
    };
  }]);

})();