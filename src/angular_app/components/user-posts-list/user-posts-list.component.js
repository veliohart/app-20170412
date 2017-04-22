(function() {
  'use strict';
  angular.module('adminApp')
    .component('userPostsList', {
      controller: ['$posts', '$state', UserPostsListController],
      controllerAs: '$UserPosts',
      templateUrl: './angular_app/components/user-posts-list/user-posts-list.component.html'
    });

  function UserPostsListController($posts, $state) {
    var vm = this;
    vm.$onInit = onInit;

    function onInit() {
      vm.list = [];
    }

    $posts.getPosts({
      userId: $state.params.userId
    })
    .then(function(result) {
      vm.list = result.data;
    })
    .catch(function(err) {
      console.log(err);
    });
  }
})()