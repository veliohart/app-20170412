(function() {
  angular.module('adminApp')
    .component('content', {
      controller: ContentController,
      controllerAs: '$content',
      templateUrl: './angular_app/components/content/content.component.html'
    });

  function ContentController() {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
    }
  }
})();