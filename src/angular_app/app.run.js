(function () {
  'use strict';
  angular.module('adminApp')
    .run(['$rootScope', '$state', '$location', adminAppRun]);

  function adminAppRun($rootScope, $state, $location) {
    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        //console.log('to.redirectTo', to.redirectTo);
        $state.go(to.redirectTo, params, {reload: true, location: 'replace'});
      }
    });
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  }
})();