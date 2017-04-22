(function() {
  'use strict';
  angular.module('adminApp')
    .config(['$provide', adminAppConfig]);

  function adminAppConfig($provide) {
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
  }
})();