(function() {
  "use strict";
  angular.module('adminApp')
    .service('$users', ['$globals', '$http', '$helpers', UsersService]);

  function UsersService($globals, $http, $helpers) {
    var _this = this;

    this.getUser = getUser;
    this.getUsers = getUsers;

    function getUser(userId) {
      return $http.get($globals.remoteApi + '/users/' + userId);
    };
    function getUsers(params) {
      var url = $helpers.urlQueryBuilder(params);

      return $http.get($globals.remoteApi + '/users' + url);
    };
  };
})();