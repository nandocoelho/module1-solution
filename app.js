// module1-solution
// Coursera - Single Page Web Applications with AngularJS - Week 1 Course - Module 1 Solution
// Author: Fernando Coelho
// URL: https://nandocoelho.github.io/module1-solution/
// Version: 1.0
// Date: 2017-01-06

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
