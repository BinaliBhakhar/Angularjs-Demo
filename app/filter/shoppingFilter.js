angular.module('app.filter.shoppingFilter', [])
.filter('cart', function() {
    return function(items) {
      var x = items.slice().cart();
      if( items.length > 1 ) {
        angular.element('#ok tr').css('background','#fff');
        angular.element('#ok tr').filter(':first').css('background','lightyellow');
        setTimeout(function() {
          angular.element('#ok tr') .filter(':first').css('background','#fff');
        }, 500);
      }
      return x;
    };
})