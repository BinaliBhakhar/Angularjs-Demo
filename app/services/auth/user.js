angular.module('app.services.user', [])

.service('HttpService', function($http) {
    return {
      getUsers: function(){
        return $http.get('http://jsonplaceholder.typicode.com/users')
          .then(function(response) {
          console.log('Get Users', response);
          return response.data;
        });
      },     
    }
  });