
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



});
