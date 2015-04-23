angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $stateParams, Recommends) {
        var promise = Recommends.all(); // 同步调用，获得承诺接口
        promise.then(function(data) { // 调用承诺API获取数据 .resolve
            $scope.experts = data;
            console.log(data);
        }, function(data) { // 处理错误 .reject
            $scope.experts = {
                error: '用户不存在！'
            };
        });

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
    .controller('DashExpertCtrl', function($scope, $stateParams, Experts) {
        var promise = Experts.get($stateParams.expertId); // 同步调用，获得承诺接口

        promise.then(function(data) { // 调用承诺API获取数据 .resolve
            $scope.expert = data;
        }, function(data) { // 处理错误 .reject
            $scope.expert = {
                error: '用户不存在！'
            };
        });
    })
    .controller('DashWorkCtrl', function($scope, $stateParams, Works) {
        var promise = Works.get($stateParams.workId); // 同步调用，获得承诺接口

        promise.then(function(data) { // 调用承诺API获取数据 .resolve
            $scope.work = data;
        }, function(data) { // 处理错误 .reject
            $scope.work = {
                error: '用户不存在！'
            };
        });
    })
    .controller('ExpertsCtrl', function($scope, Experts) {
        var promise = Experts.all(); // 同步调用，获得承诺接口
        promise.then(function(data) { // 调用承诺API获取数据 .resolve
            $scope.experts = data;
            console.log(data);
        }, function(data) { // 处理错误 .reject
            $scope.experts = {
                error: '用户不存在！'
            };
        });

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

.controller('ExpertCtrl', function($scope, $stateParams, Experts) {
    var promise = Experts.get($stateParams.expertId); // 同步调用，获得承诺接口

    promise.then(function(data) { // 调用承诺API获取数据 .resolve
        $scope.expert = data;
    }, function(data) { // 处理错误 .reject
        $scope.expert = {
            error: '用户不存在！'
        };
    });
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
