(function() {
  "use strict";
  angular.module('adminApp')
    .service('$comments', ['$globals', '$http', '$helpers', CommentsService]);

  function CommentsService($globals, $http, $helpers) {
    var _this = this;

    this.getComment = getComment;
    this.getComments = getComments;

    function getComment(userId) {
      return $http.get($globals.remoteApi + '/comments/' + userId);
    };
    function getComments(params) {
      var url = $helpers.urlQueryBuilder(params);

      return $http.get($globals.remoteApi + '/comments' + url);
    };
  };
})();