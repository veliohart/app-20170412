(function() {
  "use strict";
  angular.module('adminApp')
    .service('$albums', ['$globals', '$http', '$helpers', AlbumsService]);

  function AlbumsService($globals, $http, $helpers) {
    var _this = this;

    this.getAlbum = getAlbum;
    this.getAlbums = getAlbums;

    function getAlbum(userId) {
      return $http.get($globals.remoteApi + '/albums/' + userId);
    };
    function getAlbums(params) {
      var url = $helpers.urlQueryBuilder(params);

      return $http.get($globals.remoteApi + '/albums' + url);
    };
  };
})();