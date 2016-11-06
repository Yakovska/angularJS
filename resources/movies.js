'use strict';
angular.module('oldmenTest')
.controller('FormController', ['$scope', 'postersName', function($scope, postersName) {
	$scope.posters= postersName.getPosters();
	
	$scope.posterTitle = '';
}]);