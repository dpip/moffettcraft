moffettcraft.controller('galleryController', function($scope) {


});

$(document).on("click", "#menuwrap3", function() {


    $("#menu").addClass(function(index, currentClass) {
      if (currentClass === "hid")
        $("#menu").removeClass("hid").addClass("activate-gallery");
      else
        $("#menu").removeClass("activate-gallery").addClass("hid");
    });
    $("#menuwrap3").addClass(function(index, currentClass) {
      if (currentClass === "hid2")
        $("#menuwrap3").removeClass("hid2").addClass("activate-gallery2");
      else
        $("#menuwrap3").removeClass("activate-gallery2").addClass("hid2");
    });
    $("#text").addClass(function(index, currentClass) {
      if (currentClass === "hidtext")
        $("#text").removeClass("hidtext").addClass("shotext-gallery");
      else
        $("#text").removeClass("shotext-gallery").addClass("hidtext");
    });


    $(".work").hover(function() {
  //this is for mouseenter
        $("#thumb-rollover-" + this.id).css('visibility','visible');
      }, function() {
        //this is for mouseleave
        $("#thumb-rollover-" + this.id).css('visibility','hidden');
      });


});
