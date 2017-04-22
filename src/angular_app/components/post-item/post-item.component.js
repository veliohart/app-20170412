(function() {
  'use strict';
  angular.module('adminApp')
    .component('postItem', {
      controller: [UserAlbumListController],
      controllerAs: '$post',
      templateUrl: './angular_app/components/post-item/post-item.component.html',
      bindings: {
        item: '<'
      }
    });

  function UserAlbumListController() {
    var vm = this;
    vm.$onInit = onInit;

    function onInit() {
    }
  }
})()