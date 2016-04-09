app.directive('loginDialog', function (AUTH_EVENTS) {
  return {
    restrict: 'A',
    template: '<div ng-if="visible">Login failed, please retry</div>',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };

      var hideDialog = function() {
        scope.visible = false
      }

      scope.visible = false;
      scope.$on(AUTH_EVENTS.loginFailed, showDialog)
      scope.$on(AUTH_EVENTS.loginSuccess, hideDialog)
    }
  };
})
