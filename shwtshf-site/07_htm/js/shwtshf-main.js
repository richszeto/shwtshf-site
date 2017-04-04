/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

$(window).load(function() {    

  var theWindow        = $(window),
      $bg              = $("#bg"),
      aspectRatio      = $bg.width() / $bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg
          .removeClass()
          .addClass('bgheight');
    } else {
        $bg
          .removeClass()
          .addClass('bgwidth');
    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * https://css-tricks.com/perfect-full-page-background-image/
 * ======================================================================== */

