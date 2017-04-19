'use strict';

(function() {
  angular.module('adminApp')
    .component('page', {
      controller: PageController,
      controllerAs: '$page',
      templateUrl: './angular_app/components/page/page.component.html'
    });

  function PageController() {
    var vm = this;
    vm.title = 'qq text';
  }
})();