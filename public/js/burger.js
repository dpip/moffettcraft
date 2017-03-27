  // Best practice is to keep jquery - vanilla separate from controllers
// Function is already pushed into DOM by angular. Refrence below.
// http://stackoverflow.com/questions/18876537/jquery-click-events-not-firing-within-angularjs-templates

$(document).on("click", "#menuwrap", function() {


    $()
    $("#menu").addClass(function(index, currentClass) {
      if (currentClass === "hid")
        $("#menu").removeClass("hid").addClass("activate");
      else
        $("#menu").removeClass("activate").addClass("hid");
    });
    $("#menuwrap").addClass(function(index, currentClass) {
      if (currentClass === "hid2")
        $("#menuwrap").removeClass("hid2").addClass("activate2");
      else
        $("#menuwrap").removeClass("activate2").addClass("hid2");
    });
    $("#text").addClass(function(index, currentClass) {
      if (currentClass === "hidtext")
        $("#text").removeClass("hidtext").addClass("shotext");
      else
        $("#text").removeClass("shotext").addClass("hidtext");
    });

});

setInterval('cycleImages()', 4200);

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);
      $active.fadeOut(1400,function(){
         $active.css('z-index',1).show().removeClass('active');
            $next.css('z-index',3).addClass('active');
      });
    }

//     function moveScroller() {
//     var $anchor = $("#scroller-anchor");
//     var $scroller = $('#scroller');
//
//     var move = function() {
//         var st = $(window).scrollTop();
//         var ot = $anchor.offset().top;
//         if(st > ot) {
//             $scroller.css({
//                 position: "fixed",
//                 top: "0px"
//             });
//         } else {
//             if(st <= ot) {
//                 $scroller.css({
//                     position: "relative",
//                     top: ""
//                 });
//             }
//         }
//     };
//     $(window).scroll(move);
//     move();
// }
