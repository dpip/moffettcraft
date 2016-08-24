var moffettcraft  = angular.module('moffettcraft', ['ngRoute']);

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
    });

  });
