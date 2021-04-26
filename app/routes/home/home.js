angular.module('app.home', ['app.directive.homeShopping']).component('home', {
  templateUrl: 'routes/home/home.html',
  controller:function($scope,$filter){
	
    $scope.products = [
      {
        "product_id" : 1,
        "product_name" : "Dell Inspiron 15 7000",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mOy6OcgwhsN5CpNSG8lJBzWMS0SOwfQ8OVs3m65ZjvpfPSVPhYgrvTO7r96y14g_a_wdaA&usqp=CAc",
        "product_price" : 86000,
        "product_rate" : 3,
        "product_like" : 120,
        "product_dislike" : 10
      },
      {
        "product_id" : 2,
        "product_name" : "Dell Inspiron 15 7001",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://4.imimg.com/data4/FI/IN/MY-25201001/dell-laptop-250x250.jpg",
        "product_price" : 90000,
        "product_rate" : 1,
        "product_like" : 80,
        "product_dislike" : 0
      },
      {
        "product_id" : 3,
        "product_name" : "Dell Inspiron 15 7002",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/n/p/g/dell-inspiron-3467-notebook-original-imaetu5cfhy3fg5r.jpeg?q=70",
        "product_price" : 66000,
        "product_rate" : 2,
        "product_like" : 200,
        "product_dislike" : 70
      },
      {
        "product_id" : 4,
        "product_name" : "Dell Inspiron 15 7003",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://2.imimg.com/data2/PT/HD/IMFCP-4182179/full-images-dell-laptop-786239-250x250.jpg",
        "product_price" : 45000,
        "product_rate" : 3,
        "product_like" : 150,
        "product_dislike" : 8
      },
      {
        "product_id" : 5,
        "product_name" : "Dell Inspiron 15 7004",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "http://cdn.ndtv.com/tech/images/dell_inspiron_15_7000.jpg",
        "product_price" : 37000,
        "product_rate" : 4,
        "product_like" : 170,
        "product_dislike" : 50
      },
      {
        "product_id" : 6,
        "product_name" : "Dell Inspiron 15 7005",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2018/05/dell-xps-15-9570-png-01.png?itok=_CLAuD4a",
        "product_price" : 86000,
        "product_rate" : 4,
        "product_like" : 100,
        "product_dislike" : 9
      },
      {
        "product_id" : 7,
        "product_name" : "Dell Inspiron 15 7006",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://s.blogcdn.com/chinese.engadget.com/media/2009/05/dell-studio-14z-colorful-sm.jpg",
        "product_price" : 25000,
        "product_rate" :2,
        "product_like" : 40,
        "product_dislike" : 2
      },
      {
        "product_id" : 8,
        "product_name" : "Dell Inspiron 15 7007",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOu3bza2O5xxDMth4ya9FMed2ri8B17RHMVg&usqp=CAU",
        "product_price" : 10000,
        "product_rate" : 3,
        "product_like" : 80,
        "product_dislike" : 7
      },
      {
        "product_id" : 9,
        "product_name" : "Dell Inspiron 15 7008",
        "product_brand" : "Dell",
        "product_desc" : "38.1cm (15) performance laptop with 6th Gen Intel® Core™ processors and the latest graphics for a new level of fun, games and videos.",
        "product_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGxAIGpQZj5Ah8k-a5PYDSw3zbqe1DCOYow&usqp=CAU",
        "product_price" : 26000,
        "product_rate" : 5,
        "product_like" : 57,
        "product_dislike" : 3
      }
    ];
    
    $scope.cart = [];
    $scope.addTocart = function(productIndex){
      $scope.cart.push($scope.products[productIndex]);
      $scope.products[productIndex].disable = true;      
    };
    
    $scope.removeItem = function(itemIndex){
      $scope.cart[itemIndex].disable = false;
      $scope.cart.splice(itemIndex,1);
    };
    
    $scope.getTotal = function(){
      var total = 0;
      angular.forEach($scope.cart,function(value){
        total = total + value.product_price;
      });
      return total;
    };
    
    $scope.counted = $scope.products.length;    
  } 
   
});
