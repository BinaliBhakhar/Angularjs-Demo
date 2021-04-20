angular.module('app.number', ['app.factory.number']).component('number', {
    templateUrl: 'routes/number/number.html',  
    controller: function($scope,MyFactoryService) {
        $scope.result = function() {
            $scope.results = 
              MyFactoryService.Subtract($scope.num1, $scope.num2)
        };
        $scope.result2 = function() {
            $scope.results = 
              MyFactoryService.Add($scope.num1, $scope.num2)
        };
    }
});

