angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $stateParams, Recommonds) {
    // $http({method: 'GET',dataType: 'JSONP', url: 'http://localhost:3000/experts'})
    //     .success(function(data, status, headers, config) {
    //         console.log(data + '');
    //         $scope.experts = data;
    //     })
    //     .error(function(data, status, headers, config) {
    //         console.log(data);
    //     });

    $scope.experts = Recommonds.all();
    console.log(Recommonds.all());
    $scope.doRefresh = function() {
        console.log('Refreshing!');

        var work = {
            id: 20001,
            author: {
                id: 10001
            },
            name: '作品一',
            description: '这是一个用来测试的作品。',
            image: '01-001.jpg',
            likes: 0,
            comments: 0
        };

        $scope.experts.push(expert);
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
    }
})
.controller('DashExpertCtrl', function($scope, $stateParams, Experts) {
    $scope.expert = Experts.get($stateParams.expertId);
})
.controller('DashWorkCtrl', function($scope, $stateParams, Works) {
    $scope.work = Works.get($stateParams.workId);
})
.controller('ExpertsCtrl', function($scope, Experts) {
    $scope.experts = Experts.all();
    $scope.remove = function(expert) {
        Experts.remove(expert);
    }
})

.controller('ExpertCtrl', function($scope, $stateParams, Experts) {
    console.log($stateParams);
    $scope.expert = Experts.get($stateParams.expertId);
})

.controller('WorksCtrl', function($scope, Works) {
    $scope.works = Works.all();
    $scope.remove = function(work) {
        Works.remove(work);
    }

    $scope.doRefresh = function() {
        console.log('Refreshing!');

        var work = {
            id: 20001,
            author: {
                id: 10001
            },
            name: '作品一',
            description: '这是一个用来测试的作品。',
            image: '01-001.jpg',
            likes: 0,
            comments: 0
        };

        $scope.works.push(work);
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
    }
})

.controller('WorkCtrl', function($scope, $stateParams, Works) {
    $scope.work = Works.get($stateParams.workId);
})

.controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('LoginCtrl', function($scope) {

    });
