(function() {
  'use strict';
  angular.module('adminApp')
    .config(['$provide', '$urlRouterProvider', '$stateProvider', '$locationProvider', adminAppConfig]);

  function adminAppConfig($provide, $urlRouterProvider, $stateProvider, $locationProvider) {
    $provide.decorator('$exceptionHandler', ['$delegate', extendExceptionHandler]);
    function extendExceptionHandler($delegate) {
      var appErrorPrefix = 'ERROR: ';
      return function (exception, cause) {
        $delegate(exception, cause);
        var errorData = {
          exception: appErrorPrefix + exception.message,
          trace: exception,
          cause: cause
        };
        console.log(exception);
        console.log(appErrorPrefix, errorData);
        console.log(exception);
      };
    }

    //url normalization
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path(),
        normalized = path.toLowerCase();

      if (path !== normalized) {
        return normalized;
      }
    });

    $urlRouterProvider.otherwise('/');

    var rootState = {
      name: 'root',
      url: '',
      abstract: true,
      template: '<page></page>'
    };

    var helloState = {
      name: 'hello',
      url: '/hello',
      parent: 'root',
      views: {
        content: {
          template: '<h3>hello world!</h3>'
        }
      }
    };

    var aboutState = {
      name: 'about',
      url: '/about',
      parent: 'root',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(rootState);
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

    $locationProvider.html5Mode(true);
  }
})();