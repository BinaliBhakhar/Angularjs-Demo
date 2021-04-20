angular.module('app.state', ['app.filter.stateful']).component('state', {
    templateUrl: 'routes/statefulFilter/filter.html',  
    controller: function($scope, reverseFilter) {
        $scope.greeting = 'hello';
        $scope.filteredGreeting = reverseFilter($scope.greeting);
      }
    });