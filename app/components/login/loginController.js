app.controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', function($scope, $rootScope, AUTH_EVENTS, AuthService){
  $scope.credentials = {
    user: '',
    password: ''
  }

  $scope.login = function(credentials){
    AuthService.login(credentials)
      .then(function(session){
        $rootScope.userSession = session
        // $rootScope.apply()
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess)
      }, function(){
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed)
      })
  }
}])
