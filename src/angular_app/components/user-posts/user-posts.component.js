(function() {
  'use strict';
  angular.module('adminApp')
    .component('userPosts', {
      transclude: true,
      controller: ['$posts', '$comments', '$state', UserPostsController],
      controllerAs: '$uPosts',
      templateUrl: './angular_app/components/user-posts/user-posts.component.html'
    });

  function UserPostsController($posts, $comments, $state) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.koo = $state.current.name;
      vm.post = {};
      vm.albums = [];

      $posts.getPost($state.params.postId)
        .then(function(result) {
          angular.copy(result.data, vm.post);
        })
        .catch(function(err) {
          console.log(err);
        });

      $comments.getComments({
        postId: $state.params.postId
      })
        .then(function(result) {
          angular.copy(result.data, vm.albums);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
})();