angular.module('nike-clone').controller('womensTrainingCtrl', function($scope, mainService) {

    $scope.getWomensTraining = function() {
      mainService.getWomensTraining().then(function(response) {


         $scope.mensshoes = response.data;

      })
    }
    $scope.getWomensTraining();
})
