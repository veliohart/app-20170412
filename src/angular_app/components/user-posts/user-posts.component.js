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
    console.log('userPosts', $state.params.postId);

    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.post = {};
      vm.comments = [];

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
        angular.copy(result.data, vm.comments);
        
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }
})();