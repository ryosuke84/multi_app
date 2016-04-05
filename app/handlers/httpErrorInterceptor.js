



app.factory('HttpErrorInterceptor', ['$q', '$location', function($q, $location){

  var interceptor = {
    responseError: handleError
  }

  return interceptor

  function handleError(rejection){
      $location.url('/home')
      return $q.reject(rejection)
  }

}])
