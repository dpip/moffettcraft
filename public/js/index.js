var moffettcraft  = angular.module('moffettcraft', ['ngRoute', 'duScroll', 'ngAnimate']);




  moffettcraft.config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl : 'land.html',
      controller : 'landController'
    })

    .when('/about', {
      templateUrl : 'about.html',
      controller :  'aboutController'
    })

    .when('/gallery', {
      templateUrl : 'gallery.html',
      controller : 'galleryController'
    })

    .when('/blog', {
      templateUrl : 'blog.html',
      controller : 'blogController'
    });



  });
