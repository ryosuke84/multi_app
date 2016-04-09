app.factory('AuthService', ['$http', 'Session', '$q', '$localStorage', function($http, Session, $q, $localStorage){

  return {
    login: function(credentials){
      var deferred = $q.defer()
      if(credentials.user === 'nanni' && credentials.password === 'nanni'){
        //Create a new session
        Session.create(1,'Nanni', 'admin')

        //Save it in the local storage
        $localStorage.userSession = Session.getSession()

        deferred.resolve(Session.getSession())
      } else if(credentials.user === 'angelo' && credentials.password === 'angelo') {
        //Create a new session
        Session.create(2,'Angelo', 'user')

        //Save it in the local storage
        $localStorage.userSession = Session.getSession()

        deferred.resolve(Session.getSession())
      } else {
        deferred.reject()
      }
      return deferred.promise
    },
    logout: function(){
      Session.destroy()
      $localStorage.$reset()
    },
    isAuthenticated: function(){
      var session = Session.getSession()
      return !!session
    },
    isAuthorized: function(authorizedRoles){
      if(!!authorizedRoles){
        return (this.isAuthenticated() && authorizedRoles.indexOf(Session.getSession().userRole) !== -1)
      } else {
        return true
      }
    }
  }
}])
