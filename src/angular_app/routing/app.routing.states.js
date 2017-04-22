(function() {
  'use strict';
  angular.module('app.routing')
    .constant('$states', {
      root: {
        name: 'root', 
        url: '',
        abstract: true,
        template: '<page></page>'
      },
      hello: {
        name: 'hello',
        url: '/hello',
        parent: 'root',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<content></content>'
          }
        }
      },
      search: {
        name: 'search',
        url: '/search?q',
        parent: 'root',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<search></search>'
          },
          footer: {
            template: '<footer></footer>'
          }
        }
      },
      list: {
        name: 'list',
        url: '/list',
        parent: 'root',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<users-list></users-list>'
          },
          footer: {
            template: '<footer></footer>'
          }
        }
      },
      albums: {
        name: 'userAlbums',
        url: '/:userId',
        parent: 'list',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<users-list></users-list>'
          },
          footer: {
            template: '<footer></footer>'
          },
          posts: {
            template: '<user-posts-list></user-posts-list>'
          }
        }
      },
      posts: {
        name: 'userPost',
        url: '/post/:postId',
        parent: 'userAlbums',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<users-list></users-list>'
          },
          footer: {
            template: '<footer></footer>'
          },
          posts: {
            template: '<user-posts></user-posts>'
          }
        }
      },
      about: {
        name: 'about',
        url: '/about',
        parent: 'root',
        template: '<h3>Its the UI-Router hello world app!</h3>'
      }
    });
})()