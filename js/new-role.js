// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {

    var ageSlider = $('#slider-age')[0];
    noUiSlider.create(ageSlider, {
      start: [0, 100],
      range: { min: 0, max: 100 },
      connect: true
    });

    var leftSliderValue = $('#slider-label-left');
    var rightSliderValue = $('#slider-label-right');

    ageSlider.noUiSlider.on('update', function( values, handle ) {
      var value = values[handle];
      if ( handle === 0 ) {
        leftSliderValue.text(Math.round(value));
      } else {
        rightSliderValue.text(Math.round(value));
      }
    });

    $('.noUi-connect').css({'background-color':'#3949AB'});
    $('.noUi-background').height(9);

    $('.noUi-handle').width(20);

    $(".clicky").click(function() {
      var selectedGender = $(this).text();
      $("#genderToReplace").text(selectedGender);
    });


//    var dropZoneId = "drop-zone";
//    var buttonId = "clickHere";
//    var mouseOverClass = "mouse-over";
//
//    var dropZone = $("#" + dropZoneId);
//    var ooleft = dropZone.offset().left;
//    var ooright = dropZone.outerWidth() + ooleft;
//    var ootop = dropZone.offset().top;
//    var oobottom = dropZone.outerHeight() + ootop;
//    var inputFile = dropZone.find("input");
//    document.getElementById(dropZoneId).addEventListener("dragover", function (e) {
//        e.preventDefault();
//        e.stopPropagation();
//        dropZone.addClass(mouseOverClass);
//        var x = e.pageX;
//        var y = e.pageY;
//
//        if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
//            inputFile.offset({
//                top: y - 15,
//                left: x - 100
//            });
//        } else {
//            inputFile.offset({
//                top: -400,
//                left: -400
//            });
//        }
//
//    }, true);
//
//    if (buttonId != "") {
//        var clickZone = $("#" + buttonId);
//
//        var oleft = clickZone.offset().left;
//        var oright = clickZone.outerWidth() + oleft;
//        var otop = clickZone.offset().top;
//        var obottom = clickZone.outerHeight() + otop;
//
//        $("#" + buttonId).mousemove(function (e) {
//            var x = e.pageX;
//            var y = e.pageY;
//            if (!(x < oleft || x > oright || y < otop || y > obottom)) {
//                inputFile.offset({
//                    top: y - 15,
//                    left: x - 160
//                });
//            } else {
//                inputFile.offset({
//                    top: -400,
//                    left: -400
//                });
//            }
//        });
//    }
//
//    document.getElementById(dropZoneId).addEventListener("drop", function (e) {
//        $("#" + dropZoneId).removeClass(mouseOverClass);
//    }, true);
//
//    inputFile.on('change', function (e) {
//        $('#filename').html("");
//        var fileNum = this.files.length,
//            initial = 0,
//            counter = 0;
//        for (initial; initial < fileNum; initial++) {
//            counter = counter + 1;
//            $('#filename').append('<span class="fa-stack fa-lg"><i class="fa fa-file fa-stack-1x "></i><strong class="fa-stack-1x" style="color:#FFF; font-size:12px; margin-top:2px;">'+ counter + '</strong></span> ' + this.files[initial].name + '&nbsp;&nbsp;<span class="fa fa-times-circle fa-lg closeBtn" title="remove"></span><br>');
//        }
//    });
  

});