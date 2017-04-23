(function () {
  'use strict';
  angular.module('adminApp')
    .run(['$rootScope', '$state', '$location', '$auth', '$http', adminAppRun]);

  function adminAppRun($rootScope, $state, $location, $auth, $http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // keep user logged in after page refresh
    if (currentUser) {
        $http.defaults.headers.common.Authorization = currentUser.token;
    }

    $auth.checkAuth().then(function(state) {
      if (!state) {
        $state.go('/signIn');
      }
    })
    .catch(function() {
      $state.go('/signIn');
    });

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));  

      if (!currentUser) {
          $location.path('/signin');
      }
    });

    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));  
     if (!currentUser) {
        $state.go('/signIn');
      }
      
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {reload: true, location: 'replace'});
      }
    });
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  }
})();