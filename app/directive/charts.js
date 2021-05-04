angular.module('app.directive.charts',[])
.directive('qnPiechart', [
    function() {
        return {
            require: '?ngModel',
            link: function(scope, element, attr, controller) {
                var settings = {
                    is3D: true
                };

                var getOptions = function() {
                    return angular.extend({ }, settings, scope.$eval(attr.qnPiechart));
                };

                // creates instance of datatable and adds columns from settings
                var getDataTable = function() {
                    var columns = scope.$eval(attr.qnColumns);
                    var data = new google.visualization.DataTable();
                    angular.forEach(columns, function(column) {
                        data.addColumn(column.type, column.name);
                    });
                    return data;
                };

                var init = function() {
                    var options = getOptions();
                    if (controller) {

                        var drawChart = function() {
                            var data = getDataTable();
                            // set model
                            data.addRows(controller.$viewValue);

                            // Instantiate and draw our chart, passing in some options.
                            var pie = new google.visualization.PieChart(element[0]);
                            pie.draw(data, options);
                        };

                        controller.$render = function() {
                            drawChart();
                        };
                    }

                    if (controller) {
                        // Force a render to override
                        controller.$render();
                    }
                };

                // Watch for changes to the directives options
                scope.$watch(getOptions, init, true);
                scope.$watch(getDataTable, init, true);
            }
        };
    }
]);