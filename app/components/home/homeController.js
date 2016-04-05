
app.controller('HomeController', ['$scope','$rootScope', 'SharedService', function($scope, $rootScope, SharedService){
  $scope.changeMessage = function(message){
    SharedService.setMessage(message)
    $rootScope.$broadcast("new-message-available")
  }
}])
