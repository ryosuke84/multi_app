
'use strict'

app.factory('SharedService', function(){
  var message

  return {
      setMessage: function(newMessage){
        message = newMessage
        console.log("New message set: " + message)
      },

      getMessage: function() {
        return message
      }
  }
})
