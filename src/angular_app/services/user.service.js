(function() {
  'use strict';
  angular.module('adminApp')
    .service('$user', ['$http', userService]);

    function userService($http) {
      var _this = this,
          base = '/user/';

      _this.signIn = signIn;
      _this.registration = registration;
      _this.setToken = setToken;

      function signIn(credentials) {
        var action = 'login';
        var boby = new FormData();

        body.append('username', credentials.username);
        body.append('password', credentials.password);

        $http.post(base + action, body)
      };
      function registration(credentials, autoSignIn) {
        var action = 'registration';
        var boby = new FormData();

        body.append('username', credentials.username);
        body.append('password', credentials.password);

        $http.post(base + action, body).then(function(res) {
          if (autoSignIn) {
            signIn(credentials);
          }
        })
        .catch(function(err) {
          console.error('register error', err);
        });
      };
      function setToken(token) {
        if (!token) return false;
        
      }
    }
})();