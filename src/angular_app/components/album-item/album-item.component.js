(function() {
  angular.module('adminApp')
    .component('albumItem', {
      controller: AlbumItemController,
      controllerAs: '$album',
      templateUrl: './angular_app/components/album-item/album-item.component.html',
      bindings: {
        item: '='
      }
    });

  function AlbumItemController() {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
    }
  }
})();