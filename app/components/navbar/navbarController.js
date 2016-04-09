app.controller('NavbarController', ['$scope', '$rootScope', 'SharedService', 'AUTH_EVENTS', 'AuthService', function($scope,$rootScope, SharedService, AUTH_EVENTS, AuthService){


  // $scope.$on(AUTH_EVENTS.loginSuccess, function(event, session){
  //   console.log('user authenticated: ' + session.userId)
  //   $scope.userId = session.userId
  // })

  // $scope.$on(AUTH_EVENTS.logoutSuccess, function(){
  //   $scope.userId = null
  // })

  $scope.logOut = function() {
    AuthService.logout()
    $rootScope.userSession =  null
    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess)
  }
}])
