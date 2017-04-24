(function() {
  angular.module('adminApp')
    .component('headerComponent', {
      controller: ['$auth', '$state', HeaderController],
      controllerAs: '$header',
      templateUrl: './angular_app/components/header/header.component.html'
    });

  function HeaderController($auth, $state) {
    var vm = this;

    vm.$onInit = onInit;
    vm.logout = logout;

    function onInit() {
      vm.username = $auth.user() ? $auth.user().username : ''; 
    }
    function logout() {
      $auth.clearUser();
      $state.go('signIn', {}, {reload: true});
    }
  }
})();