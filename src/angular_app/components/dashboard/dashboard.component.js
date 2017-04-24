(function() {
  "use strict";
  angular.module('adminApp')
    .component('dashboard', {
      controller: ['$users', '$posts', '$albums', '$q', DashboardController],
      controllerAs: '$dashboard',
      templateUrl: './angular_app/components/dashboard/dashboard.component.html'
    });

  function DashboardController($users, $posts, $albums, $q) {
    var vm = this,
        series = [];

    vm.$onInit = onInit;

    function onInit() {
      vm.loading = true;
      $users.getUsers()
        .then(function(result) {
          return result.data;
        })
        .then(function(users) {
          var promises = [];
          angular.forEach(users, function(user) {
            promises.push($q.all([
              $posts.getPosts({userId: user.id}).then(function(result) {return result.data;}),
              $albums.getAlbums({userId: user.id}).then(function(result) {return result.data;})
            ]));
          });

          $q.all(promises)
            .then(function (result) {
              angular.forEach(result, function(item) {
                var chartDataItem = {
                  name: users[item[0][0].userId - 1].username,
                  data: [item[0].length, item[1].length]
                };
                series.push(chartDataItem);
              });
              chartInit();
              vm.loading = false;
            });
        });
    }

    function chartInit() {
      var myChart = Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Posts & Albums'
        },
        xAxis: {
          categories: ['Posts', 'Albums']
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        series: series
      });
    }
  }
})();