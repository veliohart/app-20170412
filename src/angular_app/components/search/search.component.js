(function() {
  'use strict';
  angular.module('adminApp')
    .component('search', {
      transclude: true,
      controller: ['$posts', '$albums', SearchController],
      controllerAs: '$search',
      templateUrl: './angular_app/components/search/search.component.html'
    });

  function SearchController($posts, $albums) {
    var vm = this;

    vm.$onInit = onInit;
    vm.changeType = changeType;

    function onInit() {
      vm.query = new RegExp('', 'gi');
      vm.text = "";
      vm.type = 'posts';
      vm.posts = [];
      vm.albums = [];
    }

    function changeType(type) {
      vm.type = type;
    }

    $posts.getPosts()
      .then(function(result) {
        angular.copy(result.data, vm.posts);
      })
      .catch(function(err) {
        console.log(err);
      });
    $albums.getAlbums()
      .then(function(result) {
        angular.copy(result.data, vm.albums);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
})();