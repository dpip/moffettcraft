moffettcraft.controller('aboutController', function($scope) {


});


$(document).on("click", "#menuwrap2", function() {


    $("#menu").addClass(function(index, currentClass) {
      if (currentClass === "hid")
        $("#menu").removeClass("hid").addClass("activate-about");
      else
        $("#menu").removeClass("activate-about").addClass("hid");
    });
    $("#menuwrap2").addClass(function(index, currentClass) {
      if (currentClass === "hid2")
        $("#menuwrap2").removeClass("hid2").addClass("activate-about2");
      else
        $("#menuwrap2").removeClass("activate-about2").addClass("hid2");
    });
    $("#text").addClass(function(index, currentClass) {
      if (currentClass === "hidtext")
        $("#text").removeClass("hidtext").addClass("shotext-about");
      else
        $("#text").removeClass("shotext-about").addClass("hidtext");
    });

});
