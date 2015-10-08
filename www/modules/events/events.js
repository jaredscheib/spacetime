(function(){
'use strict'

var EventsCtrl = function($http){
    var self = this;

    this.init = function(){
      this.events = [];
      this.retrieveEvents();
    };

    this.retrieveEvents = function(){
      $http.get('/api/events')
      .then(function(res){
        self.events = res.data;
      }, function(err){
        console.log('Error on GET request when trying to retrieve events:', err.code);
      });
    };
  };

angular
  .module('events', [])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'modules/events/events.html',
        controllerAs: 'eventsFeed', // creates new instance of controller each time instead of every module using same controller, thus can use this keyword in controller function body instead of injecting $scope
        controller: 'EventsCtrl'
      });

  }])

  .controller('EventsCtrl', [
    '$http',
    EventsCtrl
    ]);

})();