angular.module('app.directive.homeShopping',[])
.directive('starRating', function () {  
    return {
        restrict: 'A',
        template: '<ul>' +
            '<li ng-repeat="star in stars" ng-class="star">' +
            
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
      max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});	
