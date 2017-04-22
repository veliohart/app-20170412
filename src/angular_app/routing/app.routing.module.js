(function() {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$states', routingConfig]);

  function routingConfig($urlRouterProvider, $stateProvider, $locationProvider, $states) {
    //url normalization
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path(),
        normalized = path.toLowerCase();

      if (path !== normalized) {
        return normalized;
      }
    });

    $urlRouterProvider.otherwise('/list');

    angular.forEach($states, function(state) {
      $stateProvider.state(state);
    });

    $locationProvider.html5Mode(true);
  }
})()