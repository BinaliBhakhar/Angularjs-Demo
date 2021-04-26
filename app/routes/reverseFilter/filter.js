angular.module('app.filter', ['app.filter.reverseFilter']).component('filter', {
    templateUrl: 'routes/reverseFilter/filter.html',  
    controller: function($scope, reverseFilter) {
        $scope.greeting = 'hello';
        $scope.filteredGreeting = reverseFilter($scope.greeting);
      }
    });