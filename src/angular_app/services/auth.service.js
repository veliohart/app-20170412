(function() {
  'use strict';
  angular.module('adminApp')
    .service('$auth', ['$http',  userService]);

    function userService($http) {
      var _this = this,
          base = '/user/';

      _this.signIn = signIn;
      _this.registration = registration;
      _this.checkAuth = checkAuth;
      _this.clearUser = clearUser;
      _this.user = user;

      function signIn(credentials) {
        var action = 'login';
        var body = {
          username: credentials.username,
          password: credentials.password
        };


        return $http.post(base + action, body)
          .then(function(result) {
            if (setToken(result.data)) {
              return result.data;
            } else {
              return {};
            }
          });
      };
      function registration(credentials, autoSignIn) {
        var action = 'registration';
        var boby = new FormData();

        body['username'] = credentials.username;
        body['password'] = credentials.password;

        $http.post(base + action, body).then(function(res) {
          if (autoSignIn) {
            signIn(credentials);
          }
        })
        .catch(function(err) {
          console.error('register error', err);
        });
      };
      function checkAuth() {
        return $http.get('/user/auth').then(function(result) {
          return result.data;
        });
      }
      function setToken(authRes) {
        if (!authRes.token) return false;
        $http.defaults.headers.common.Authorization = authRes.token;
        localStorage.setItem('currentUser', JSON.stringify({
          username: authRes.user, 
          token: authRes.token
        }));
        return true;
      };
      function user() {
        var user = JSON.parse(localStorage.getItem('currentUser')) || {};
        return user.token ? user : false;
      };
      function clearUser () {
        localStorage.removeItem('currentUser');
      }
    }
})();