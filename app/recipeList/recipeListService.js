
app.factory('recipeListService', function($http) {
  var myService = {
    getByCategory: function(param) {

    	var req = {
    			 method: 'GET',
    			 url: service_url+'RecipeREST/getMinimalRecipeCategoryList?idCategory='+param,
    			 headers: {
    				 Accept: 'application/json'
    			 }
    			}


      var promise = $http(req)
      .then(function (response) {
        console.log(response);
        return {valid: true, response:response.data};
      },
      function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return {valid: false, response:response.data};
      }
        );
      // Return the promise to the controller
      return promise;
    },

    getByIngredient: function(param) {

    	var req = {
    			 method: 'GET',
    			 url: service_url+'RecipeREST/getMinimalRecipeIngredientList?idIngredient='+param,
    			 headers: {
    				 Accept: 'application/json'
    			 }
    			}

      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http(req).then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    },
    getNews: function() {

    	var req = {
    			 method: 'GET',
    			 url: service_url+'RecipeREST/getNewsRecipesJson',
    			 headers: {
    				 Accept: 'application/json'
    			 }
    			}

      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http(req).then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    },

  };
  return myService;
});
