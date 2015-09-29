angular.module('spacetime')

.controller('eventsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.init = function(){
    $scope.events = [];
    $scope.retrieveEvents();
    $scope.createEvent = {};
  };

  $scope.retrieveEvents = function(){
    $http.get('/events')
    .then(function(res){
      $scope.events = res.data;
    }, function(res){
      console.log('Error on GET request when trying to retrieve events');
    });
  };
}]);