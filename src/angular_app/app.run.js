(function () {
  'use strict';
  angular.module('adminApp')
    .run(['$rootScope', '$state', '$location', adminAppRun]);

  function adminAppRun($rootScope, $state, $location) {
    // var Visualizer = window['ui-router-visualizer'].Visualizer;
    // var pluginInstance = $uiRouter.plugin(Visualizer);

    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
        console.log('to.redirectTo', to);
      
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {reload: true, location: 'replace'});
      }
    });
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  }
})();