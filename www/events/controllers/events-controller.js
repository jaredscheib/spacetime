(function(){
'use strict'

angular.module('spacetime')

.controller('eventsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.init = function(){
    $scope.events = [];
    $scope.retrieveEvents();
    $scope.newEvent = {};
  };

  $scope.retrieveEvents = function(){
    $http.get('/api/events')
    .then(function(res){
      $scope.events = res.data;
    }, function(res){
      console.log('Error on GET request when trying to retrieve events');
    });
  };
}]);

})();