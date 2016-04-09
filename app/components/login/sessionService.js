app.factory('Session', ['$localStorage', function($localStorage){

  var session = null

  return {
    create: function(sessionId, userId, userRole){
      session = {
        sessionId: sessionId,
        userId: userId,
        userRole: userRole
      }
    },
    getSession: function(){return session},
    destroy: function() {session = null},
    resumeSession: function(){
      session = $localStorage.userSession
      return session
    }
  }
}])
