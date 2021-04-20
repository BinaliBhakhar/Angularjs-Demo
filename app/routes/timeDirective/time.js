angular.module('app.time', ['app.directive.time']).component('time', {
    templateUrl: 'routes/timeDirective/time.html',  
    controller: function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }
});