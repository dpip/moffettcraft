
moffettcraft.controller('landController', function($scope, $rootScope, $location, $anchorScroll, $document) {

  // click scroll navigation
  var top = 400;
  var duration = 2000;

  // $scope.$apply();

  $scope.toTheGallery = function() {
  $document.scrollTopAnimated(650, 1000)
  };
    $scope.toTheAbout = function() {
    $document.scrollTopAnimated(1650, 1200)
    };
      $scope.toTheContact = function() {
      $document.scrollTopAnimated(2000, 1500)
      };





  // object oriented images - repeated in gallery

  $rootScope.gallery=[
      {image:'assets/images/Reunion_notecard_small_res_large.jpg', 'description': 'Renuion'},
      {image:'assets/images/boat.jpg', 'description': 'Ballard Locks'},
      {image:'assets/images/turtle.jpg', 'description': 'Topsail Turtle'},
      {image:'assets/images/rhino.jpg', 'description': 'Rhino'},
      {image:'assets/images/MoffettcraftArts_2016_Bamboo_Van_Gogh_-_1_1024x1024.jpg', 'description': 'Van Jungle'},
      {image:'assets/images/hut.jpg', 'description': 'Japanese Hut'},
      {image:'assets/images/momma-bird.jpg', 'description': 'Glass Bird'},
      {image:'assets/images/LOTUS.jpg', 'description': 'Lotus in The Park'},
      {image:'assets/images/g-mama-bird.jpg', 'description': 'Mama-Bird'},
  ];



});
