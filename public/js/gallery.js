moffettcraft.controller('galleryController', function($scope, $rootScope) {

    
    $scope.hoverIn = function(){
      this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };


  $scope.paintings =

  [
        {
          image:'/assets/images/gallery/rhino.jpg',
          description: 'Rhino',
          type: 'paintings, portraits, canvas', class: 'p_one'
        },
        {
          image:'assets/images/gallery/locks.jpg',
          description: 'Locks',
          type: 'paintings, portraits, canvas', class: 'p_one'
        },
        {
          image:'assets/images/gallery/turtle.JPG',
          description: 'Topsail Turtle',
          type: 'paintings, portraits, canvas', class: 'p_one'
        },
        {
          image:'/assets/images/gallery/hut.jpg',
          description: 'Hut',
          type: 'paintings, portraits, canvas', class: 'p_one'
        },
        {
          image:'/assets/images/gallery/Reunion.jpg',
          description: 'Reunion',
          type: 'paintings, portraits, canvas', class: 'p_two'
        },
        {
          image:'/assets/images/gallery/van-jungle.jpg',
          description: 'Jungle',
          type: 'paintings, portraits, canvas', class: 'p_two'
        }


    ];

});
