var app = angular.module('MainApp', [
	'ui.router'
]);

//localStorage.username = "{  username: 'guest' 	}";

app
	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider){
			$urlRouterProvider.otherwise("/home")

 //  TODO: This is just a dumb landing page. Replace with the real hompage
 $stateProvider
 		 .state('root', {
			 abstract: true,
			 templateUrl: 'app/views/common.html'
		 })

		 .state('root.home', {
			 url:'/home',
			 templateUrl: 'app/templates/main_content.html',
			 controller: 'HomeController'
		 })

		 .state('root.second', {
			 url:'/second',
			 templateUrl: 'app/templates/second_page.html'
		 })
	// $stateProvider
	// 		.state('home', {
	// 			url:'/home',
	// 			views:{
	// 				'navbar': {
	// 					templateUrl: 'app/templates/navbar.html'
	// 				},
	// 				'main_content': {
	// 					templateUrl: 'app/templates/main_content.html'
	// 				}
	// 			}
	// 		})
			// .state('recipeCategoryList', {
			// 	url: '/recipeCategoryList/:categoryId',
			// 	controller:'recipeCategoryListController',
			// 	template:'<h1>recipelist</h1><span>{{data}}<span>',
			// 	resolve: {
			// 		recipeList:['$stateParams', 'recipeListService', function($stateParams, recipeListService){
			// 			return recipeListService.getByCategory($stateParams.categoryId)
			// 		}]
			// 	}
			// })


	// $httpProvider.interceptors.push('HttpErrorInterceptor')
	}])
/*
app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/recipe/:recipeId', {
				templateUrl: 'app/components/recipe/recipe.html',
				controller: 'recipeController'
			})
			.when('/wall/:username', {
				templateUrl: 'app/components/user/wall.html',
				controller: 'wallController'
			})
			.when('/profile/', {
				templateUrl: 'app/components/user/profile.html',
				controller: 'profileController'
			})
			.when('/login/', {
				templateUrl: 'app/components/login/login.html',
				controller: 'LoginController'
			})
			.when('/recipeCategoryList/:categoryId', {
				templateUrl: 'app/components/recipeList/recipeList.html',
				controller: 'recipeCategoryListController'
			})
			.when('/recipeIngredientList/:ingredientId', {
				templateUrl: 'app/components/recipeList/recipeList.html',
				controller: 'recipeIngredientListController'
			})
			.when('/recipeNewsList/', {
				templateUrl: 'app/components/recipeList/recipeList.html',
				controller: 'recipeNewsListController'
			})
			.otherwise({
				templateUrl: 'app/components/home/home.html',
				controller: 'homeController'
			});
			// create the controller and inject Angular's $scope

}]);



var timelineModule = angular.module('timeline', ['ui.bootstrap']);

var footer = angular.module('footer', ['ui.bootstrap']);

var searchModule = angular.module('search', ['ui.bootstrap']);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['timeline','footer','search']);
});

*/
