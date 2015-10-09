(function(){
'use strict'

angular
  .module('events')
  
  .directive('eventForm', ['$http', function($http) {
    return {
      restrict: 'AE',
      replace: true,
      scope: false,
      templateUrl: 'modules/directives/event-form.html',
      link: function(scope, element, attrs) {
        scope.formSubmitted = false;
        scope.newEvent = {
          date: new Date()
        };

        scope.submitEvent = function(e) {
          e.preventDefault();
          scope.formSubmitted = true;
          $http.post('/api/events', scope.newEvent)
          .then(function(res){
            scope.$parent.eventsFeed.events.push(scope.newEvent); // TODO: implement service for events
          }, function(err){
            console.log('Error on POST request when trying to submit event:', err.code);
            scope.formSubmitted = false;
          });
        };
      }
    };
  }]);

})();