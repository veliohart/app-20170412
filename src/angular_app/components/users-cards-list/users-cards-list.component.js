(function() {
  "use strict";
  angular.module('adminApp')
    .component('usersCardsList', {
      controller: ['$users', UsersCardsListController],
      controllerAs: '$ucList',
      templateUrl: './angular_app/components/users-cards-list/users-cards-list.component.html'
    });

  function UsersCardsListController($users) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.users = [];
      $users.getUsers()
      .then(function(result) {
        angular.copy(result.data, vm.users);
      })
      .catch(function(err) {
        console.log('err', err);
      });
    }
  }
})();