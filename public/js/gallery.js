moffettcraft.controller('galleryController', function($scope, $rootScope) {



  $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160
});

  $scope.paintings =

  [
        {image:'assets/images/Reunion.jpg', description: 'Reunion', type: 'paintings, portraits, canvas'},
        {image:'assets/images/locks.jpg', description: 'Ballard Locks', type: 'paintings, portraits, canvas'},
        {image:'assets/images/turtle.JPG', description: 'Topsail Turtle', type: 'paintings, portraits, canvas'},
        {image:'assets/images/rhino.jpg', description: 'Rhino', type: 'paintings, portraits, canvas'},
        {image:'assets/images/van-jungle.jpg', description: 'Van Jungle', type: 'paintings, portraits, canvas'},
        {image:'assets/images/pastel parrot.jpg', description: 'Parrot', type: 'paintings, portraits, canvas'},



    ];

    $scope.photos =

    [
          {image:'assets/images/LOTUS.jpg', description: 'Lotus', type: 'photography, photos, shots, camera'},
          {image:'assets/images/crane.jpg', description: 'Crane', type: 'photography, photos, shots, camera'},
          {image:'assets/images/rose.jpg', description: 'lonely Rose', type: 'photography, photos, shots, camera'},
          {image:'assets/images/guardian.jpg', description: 'Guardian', type: 'photography, photos, shots, camera'},
          {image:'assets/images/break.jpg', description: 'Break Through', type: 'photography, photos, shots, camera'},
          {image:'assets/images/glacier.jpg', description: 'Glacier', type: 'photography, photos, shots, camera'},

      ];
      $scope.crafts =

      [
            {image:'assets/images/hope.jpg', description: 'Hope', type: 'pottery, crafts, sculptures, clay'},
            {image:'assets/images/flounder.jpg', description: 'Flounder', type: 'pottery, crafts, sculptures, clay'},
            {image:'assets/images/dragon.jpg', description: 'Dragon', type: 'pottery, crafts, sculptures, clay'},

        ];



});
