(function() {
  'use strict';
  angular.module('adminApp')
    .component('usersList', {
      controller: ['$http', '$state', UsersListController],
      controllerAs: '$uList',
      templateUrl: './angular_app/components/users-list/users-list.component.html'
    });

  function UsersListController($http, $state) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.koo = $state.current.name;
      vm.usersList = [];
    }

    $http.get('/api/users')
        .then(function(result) {
          angular.copy(result.data, vm.usersList);
        })
        .catch(function(err) {
          console.log(err);
        });
  }
})()