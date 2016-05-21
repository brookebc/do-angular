'use strict';

angular.module('doAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'hello'
    ];
  })

	.controller('newPageCtrl' function($scope) {
		$scope.workPlease = "it works!";

		$scope.findProduct = function(){
			var prodId = $routeParams.product.productId;
		};

  });

