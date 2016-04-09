
app.controller('HomeController', ['$scope','$rootScope', 'Session', 'AUTH_EVENTS', function($scope, $rootScope, Session, AUTH_EVENTS){
  $scope.$on('$viewContentLoaded', function(){
    var session = Session.resumeSession()
    if(session != null && session != undefined){
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, session)
    }
  });


}])
