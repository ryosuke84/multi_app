var app = angular.module('MainApp', [
	'ui.router',
	'ui.router.state.events',
	'ngStorage'
]);

//localStorage.username = "{  username: 'guest' 	}";

app
	.config(['$stateProvider',
	 		'$urlRouterProvider',
		 	'$httpProvider',
		  'USER_ROLES',
			function ($stateProvider, $urlRouterProvider, $httpProvider, USER_ROLES){
					$urlRouterProvider.otherwise("/home")

		 //  TODO: This is just a dumb landing page. Replace with the real hompage
				 $stateProvider
				 		 .state('root', {
							 abstract: true,

							 views: {
								 '@': {
									 templateUrl: 'app/views/common.html'
								 	},
								 'navbar@root': {
									 templateUrl: 'app/templates/navbar.html',
									 controller: 'NavbarController'
								 	}
							 }
						 })

						 .state('root.home', {
							 url:'/home',
							 views:{
										// 	'navbar@root': {
										// 		templateUrl: 'app/templates/navbar.html',
										// 	controller: 'NavbarController'
										// 	},
						 				'main-content': {
						 					templateUrl: 'app/templates/main_content.html',
											controller: 'HomeController'
						 				}
						 			}
						 })

						 .state('root.second', {
							 url:'/second',
							 views: {
								 'main-content': {
									 templateUrl: 'app/templates/second_page.html',
								 }
							 },
							 data: {
								 authorizedRoles: [USER_ROLES.admin]
							 }
						 })

						 .state('root.login', {
							 url:'/login',
							 views: {
								 'main-content': {
									 templateUrl: 'app/templates/login.html',
									 controller: 'LoginController'
								 }
							 }
						 })
			}])
				.constant('AUTH_EVENTS', {
					loginSuccess: 'auth-login-succes=s',
					loginFailed: 'auth-login-failed',
					logoutSuccess: 'auth-logout-success'
				})
				.constant('USER_ROLES', {
					all: '*',
					admin: 'admin',
					editor: 'editor',
					user: 'user'
				})
				.run(['$rootScope','AUTH_EVENTS', 'Session', 'AuthService', function($rootScope, AUTH_EVENTS, Session, AuthService){

					//Here we try to restore the session for a previuos logged user
					var session = Session.resumeSession()
				  if(session != null && session != undefined){
				    $rootScope.userSession = session
				  }

					//Here we listen for $state change in order to enforce authorization
					$rootScope.$on('$stateChangeStart', function(event, next){
						if(!!next.data){
							var authorizedRoles = next.data.authorizedRoles;
					    if (!AuthService.isAuthorized(authorizedRoles)) {
					      event.preventDefault();
					      if (AuthService.isAuthenticated()) {
					        // user is not allowed
					        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
									console.log('User not authorized')
									alert('User not authorized')
					      } else {
					        // user is not logged in
					        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
									console.log('User not authenticated')
									alert('User not authenticated')
					      }
							}
						}
					})
				}])
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
