angular.module('starter.controllers', [])
    .constant('baseUrl', 'http://localhost:3000')
    .controller('DashCtrl', function($scope, $resource, $stateParams, Recommends, baseUrl) {
        $scope.expertsResource = $resource(baseUrl + '/experts/' + ':id', {
            id: '@id'
        });
        $scope.experts = $scope.expertsResource.query();

        $scope.doRefresh = function() {
            $scope.expertsResource = $resource(baseUrl + '/experts/' + ':id', {
                id: '@id'
            });
            $scope.experts = $scope.expertsResource.query();

            $scope.$broadcast('scroll.refreshComplete');
        }
    })
    .controller('DashExpertCtrl', function($scope, $http, $resource, $stateParams, Experts, baseUrl) {
        // $scope.expertResource = $resource(baseUrl + '/expert/' + ':id', {id: $stateParams.expertId});
        // $scope.expert = $scope.expertResource.query();

        $http.get(baseUrl + '/expert/' + $stateParams.expertId).success(function(data) {
            $scope.expert = data;
        });
    })
    .controller('DashWorkCtrl', function($scope, $http, $stateParams, Works, baseUrl) {
        $http.get(baseUrl + '/work/' + $stateParams.workId).success(function(data) {
            $scope.work = data;
        });
    })
    .controller('ExpertsCtrl', function($scope, $resource, Experts, baseUrl) {
        $scope.expertsResource = $resource(baseUrl + '/experts/' + ':id', {
            id: '@id'
        });
        $scope.experts = $scope.expertsResource.query();

        $scope.remove = function(expert) {
            Experts.remove(expert);
        }

        $scope.doRefresh = function() {
            console.log('Refreshing!');

            promise.then(function(data) { // 调用承诺API获取数据 .resolve
                $scope.experts = data;
            }, function(data) { // 处理错误 .reject
                $scope.experts = {
                    error: '用户不存在！'
                };
            });
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        }
    })
    .controller('ExpertCtrl', function($scope, $http, $stateParams, Experts, baseUrl) {
        $http.get(baseUrl + '/expert/' + $stateParams.expertId).success(function(data) {
            $scope.expert = data;
        });
    })
    .controller('WorksCtrl', function($scope, $resource, Works, baseUrl) {
        $scope.worksResource = $resource(baseUrl + '/works/' + ':id', {
            id: '@id'
        });
        $scope.works = $scope.worksResource.query();

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
    .controller('WorkCtrl', function($scope, $http, $stateParams, Works, baseUrl) {
        $http.get(baseUrl + '/work/' + $stateParams.workId).success(function(data) {
            $scope.work = data;
        });
    })
    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('LoginCtrl', function($scope) {

    });
