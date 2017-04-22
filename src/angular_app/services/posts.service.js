(function() {
  "use strict";
  angular.module('adminApp')
    .service('$posts', ['$globals', '$http', '$helpers', PostsService]);

  function PostsService($globals, $http, $helpers) {
    var _this = this;

    this.getPost = getPost;
    this.getPosts = getPosts;

    function getPost(userId) {
      return $http.get($globals.remoteApi + '/posts/' + userId);
    };
    function getPosts(params) {
      var url = $helpers.urlQueryBuilder(params);

      return $http.get($globals.remoteApi + '/posts' + url);
    };
  };
})();