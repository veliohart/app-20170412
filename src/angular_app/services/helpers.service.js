(function() {
  "use strict";
  angular.module('adminApp')
    .service('$helpers', [helpersService]);

  function helpersService() {
    var _this = this;

    this.urlQueryBuilder = urlQueryBuilder;

    function urlQueryBuilder(params) {
      var queryParams = '';
      angular.forEach(params, function(param, key) {
        queryParams += key + '=' + param + '&';
      });

      if (queryParams) {
        queryParams = queryParams.slice(0, queryParams.length-1);
        return queryParams = '?' + queryParams;
      } else {
        return '';
      }
    }
  };
})();