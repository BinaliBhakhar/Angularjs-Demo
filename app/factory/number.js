angular.module('app.factory.number', [])
    .factory('MyFactoryService', function () {
        var factory = {};
        factory.Subtract = function (a, b) {
            return a - b;
        };
        factory.Add = function (a, b) {
            return a + b;
        };
        return factory;
    });