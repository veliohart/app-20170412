(function() {
  angular.module('adminApp')
    .component('headerComponent', {
      controller: HeaderController,
      controllerAs: '$header',
      templateUrl: './angular_app/components/header/header.component.html'
    });

  function HeaderController() {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.koo = 'koo11';
    }
  }
})();