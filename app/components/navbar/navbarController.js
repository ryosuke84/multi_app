app.controller('NavbarController', ['$scope', '$timeout', 'SharedService', function($scope, $timeout, SharedService){
  var message = SharedService.getMessage()
  $scope.message = message

  $scope.$on('new-message-available', function(event){
    $scope.message = SharedService.getMessage()
    // $timeout( function(){
    //   console.log('received a new event')
    //   $scope.message = SharedService.getMessage()
    // })
  })
}])
