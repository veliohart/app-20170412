(function() {
  "use strict";
  angular.module('adminApp')
    .value('$globals', {
      remoteApi: 'https://jsonplaceholder.typicode.com'
    });
})();