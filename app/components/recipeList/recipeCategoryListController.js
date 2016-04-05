app.controller('recipeCategoryListController',[
	'$scope',
	'recipeListService',
	'recipeList',
	function($scope, recipeListService,	recipeList) {
		$scope.data = angular.fromJson(recipeList)
}]);
