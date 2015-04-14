angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $stateParams, Experts) {

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
