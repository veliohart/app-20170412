(function() {
  'use strict';
  angular.module('adminApp')
    .component('search', {
      transclude: true,
      controller: ['$element', '$http', '$state', SearchController],
      controllerAs: '$search',
      templateUrl: './angular_app/components/search/search.component.html'
    });

  function SearchController($element, $http, $state) {
    var vm = this;
    var searchQuery, posts = [], albums = [];
    var inputSubject;

    vm.$onInit = onInit;
    vm.$postLink = postLink;
    vm.$onDestroy = onDestroy;
    vm.changeType = changeType;

    function onInit() {
      vm.query = new RegExp('', 'gi');
      vm.text = "";
      vm.type = 'both';
      vm.posts = [];
      vm.albums = [];
    }
    function postLink() {
      /*var input = $element.find('input[role="search"]');
      inputSubject = Rx.Observable.fromEvent(input, 'keypress')
        .debounce(500)
        .map(function(event) {
          return event.target.value;
        });

      searchQuery = inputSubject.subscribe(function (next) {
        console.log('next', next);
        if (next === '') {
          angular.copy(posts, vm.posts);
          angular.copy(albums, vm.albums);
          return;
        }

        vm.query = new RegExp(next, 'gi');

        if (vm.type === "both") {
          angular.copy(filterPosts(), vm.posts);
          angular.copy(filterAlbums(), vm.albums);
        }

        if (vm.type === 'posts') {
          angular.copy(filterPosts(), vm.posts);
        }

        if (vm.type === 'albums') {
          angular.copy(filterAlbums(), vm.albums);
        }
      });*/
    }
    function onDestroy () {
      searchQuery.dispose();
    };
    function changeType(type) {
      vm.type = type;
    }
    function filterPosts() {
      return posts.filter(function(item) {
          if (vm.query.test(item.title) || vm.query.test(item.body)) {
            return item;
          }
        });
    }
    function filterAlbums() {
      return albums.filter(function(item) {
          if (vm.query.test(item.title)) {
            return item;
          }
        });
    }

    $http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(result) {
        angular.copy(result.data, posts);
        angular.copy(result.data, vm.posts);
      })
      .catch(function(err) {
        console.log(err);
      });
    $http.get('https://jsonplaceholder.typicode.com/albums')
      .then(function(result) {
        angular.copy(result.data, albums);
        angular.copy(result.data, vm.albums);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
})();