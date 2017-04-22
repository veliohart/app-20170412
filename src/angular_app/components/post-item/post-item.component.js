(function() {
  'use strict';
  angular.module('adminApp')
    .component('postItem', {
      controller: ['$users', UserAlbumListController],
      controllerAs: '$post',
      templateUrl: './angular_app/components/post-item/post-item.component.html',
      bindings: {
        item: '='
      }
    });

  function UserAlbumListController($posts) {
    var vm = this;
    vm.$onInit = onInit;

    function onInit() {
      vm.user = {};
      $posts.getUser(vm.item.userId)
        .then(function(result) {
          angular.copy(result.data, vm.user);
        });
    }
  }
})();