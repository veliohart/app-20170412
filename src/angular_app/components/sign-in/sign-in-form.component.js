(function() {
  "use strict";
  angular.module('adminApp')
    .component('signInForm', {
      controller: ['$auth', '$state', SignInFormController],
      controllerAs: '$signin',
      templateUrl: './angular_app/components/sign-in/sign-in-form.component.html'
    });

  function SignInFormController($auth, $state) {
    var vm = this;

    vm.$onInit = onInit;
    vm.login = login;

    function onInit() {

    }

    function login() {
      vm.loading = true;
      $auth.signIn({username: vm.username, password: vm.password}).then(function(result) {
        if (result.token) {
          $state.go('dashboard');
        } else {
          vm.error = 'Username or password is incorrect';
          vm.loading = false;
        }
      });
    };
  };
})();