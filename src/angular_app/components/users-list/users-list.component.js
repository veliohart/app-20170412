(function() {
  'use strict';
  angular.module('adminApp')
    .component('usersList', {
      controller: ['$state', '$users', UsersListController],
      controllerAs: '$uList',
      templateUrl: './angular_app/components/users-list/users-list.component.html'
    });

  function UsersListController($state, $users) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.koo = $state.current.name;
      vm.usersList = [];
    }

    $users.getUsers()
      .then(function(result) {
        angular.copy(result.data, vm.usersList);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
})();