(function() {
  'use strict';
  angular.module('adminApp')
    .config(['$provide', '$httpProvider', adminAppConfig]);

  function adminAppConfig($provide, $httpProvider) {
    $provide.decorator('$exceptionHandler', ['$delegate', extendExceptionHandler]);
    $provide.factory('authInterceptor', ['$q', authInterceptor]);

    $httpProvider.interceptors.push('authInterceptor');
    function authInterceptor($q) {
      return {
        // optional method
        'request': function(config) {
          // do something on success
          return config;
        },

        // optional method
        'response': function(response) {
          // do something on success
          return response;
        }
      };
    }


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
  }
})();