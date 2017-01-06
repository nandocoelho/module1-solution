(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

$scope.lunchMenu = "";
$scope.message = "";

$scope.checkLunchMenu = function () {

  if ($scope.lunchMenu != "") {
    var dishes = $scope.lunchMenu.split (",", 20); // dishes are limited to 20
    var dishesQtd = dishes.length;
    $scope.message = (dishesQtd <= 3) ? "Enjoy :)" : "Too much!";

    } else {
      var dishesQtd = 0;
      $scope.message = "Please enter data first!!!";

    };

    console.log("Qtd of dishes: " + dishesQtd); // dishes are limited to 20

  };

    return $scope.message;

   };
})();
