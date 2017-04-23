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
      signin: {
        name: 'signIn',
        url: '/signin',
        parent: 'root',
        views: {
          header: {
            template: '<header></header>'
          },
          content: {
            template: '<sign-in-form></sign-in-form>'
          },
          footer: {
            template: '<footer></footer>'
          }
        }
      },
      register: {
        name: 'register',
        url: '/reg',
        parent: 'root',
        views: {
          header: {
            template: '<header></header>'
          },
          content: {
            template: '<reg-form></reg-form>'
          },
          footer: {
            template: '<footer></footer>'
          }
        }
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
      dashboard: {
        name: 'dashboard',
        url: '/dashboard',
        parent: 'root',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<dashboard></dashboard>'
          },
          footer: {
            template: '<footer></footer>'
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
      usersCards: {
        name: 'userCards',
        url: '/user-cards',
        parent: 'root',
        views: {
          header: {
            template: '<header-component></header-component>'
          },
          content: {
            template: '<users-cards-list></users-cards-list>'
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
        name: 'userPosts',
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
        parent: 'userPosts',
        onEnter: function() {
          console.log('POST & COMMENTS');
        },
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
})();