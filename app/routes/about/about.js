angular.module('app.about', []).component('about', {
  templateUrl: 'routes/about/about.html',
  controller: function ($scope) {
    $scope.listingImg = [
      {
        src: 'src="https://www.pakainfo.com/wp-content/uploads/2017/11/InsertUpdate-Delete-using-Angular-js-in-ASP.NET-MVC-298x248.jpg"'
      },
      {
        src: 'src="https://www.pakainfo.com/wp-content/uploads/2017/11/AdSense-Address-Verification-With-AdSense-Pin-Or-Alternate-Methods-298x248.jpg"'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/How-to-Create-Social-Media-Buttons-for-All-the-Top-Social-Networks-298x165.jpg'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/Auto-Post-Tweets-on-Twitter-via-API-Using-PHP-298x248.jpg'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/How-to-Send-Push-notification-using-FCM-using-php-298x248.png'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/VueJS-Toggle-class-hide-show-on-click-Event-298x248.png'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/Jquery-and-Vuejs-conflict-Solution-example-298x248.jpg'
      },
      {
        src: 'https://www.pakainfo.com/wp-content/uploads/2017/11/Vuejs-Restful-Http-Post-and-Get-Web-Api-Calls-298x248.png'
      }
    ],
    function($scope, $timeout) {
      var slidesInSlideshow = 4;
      var slidesTimeIntervalInMs = 3000; 
       
       $scope.slideshow = 1;
       var slideTimer =
         $timeout(function interval() {
           $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
           slideTimer = $timeout(interval, slidesTimeIntervalInMs);
         }, slidesTimeIntervalInMs);
     }
  },
});
