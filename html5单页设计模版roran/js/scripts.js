jQuery(document).ready(function ($) {

	// Paralax
	if(!Modernizr.touch){ 
		$(window).stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			horizontalOffset: 0
		});
    }
	
	// Sticky Nav
	$(".nav_wrapper").sticky({topSpacing:0});
   
	// No SVG Support
    if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}
	
    // Header toggle
    $('.header_toggle').click(function() {
		$('.nav_wrapper').toggleClass( "toggled" );
	});
	
	// Single Page Nav
	$('.nav_wrapper').singlePageNav({
	    offset: ($('.nav_wrapper').outerHeight()+20)
	});
	
	
	
	// Overlay	
	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = [37, 38, 39, 40];
	
	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}
	
	function keydown(e) {
	    for (var i = keys.length; i--;) {
	        if (e.keyCode === keys[i]) {
	            preventDefault(e);
	            return;
	        }
	    }
	}
	
	function wheel(e) {
	  preventDefault(e);
	}
	
	function disable_scroll() {
	  if (window.addEventListener) {
	      window.addEventListener('DOMMouseScroll', wheel, false);
	  }
	  window.onmousewheel = document.onmousewheel = wheel;
	  document.onkeydown = keydown;
	}
	
	function enable_scroll() {
	    if (window.removeEventListener) {
	        window.removeEventListener('DOMMouseScroll', wheel, false);
	    }
	    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
	}
	
    $('.services_list li').click(function(event){
    	var $this = $(this).children('.bg');
        event.preventDefault(); // disable normal link function so that it doesn't refresh the page
        $this.show(); //display your popup
        
        if( $(window).width() < 500 ) {
	        $('.nav_wrapper').css("z-index", 0);
        }
        
        disable_scroll();
        
    });

    // hide popup when user clicks on close button
    $('.close_link').click(function(){
    	$('.bg').hide(); // hide the overlay
        
        if( $(window).width() < 500 ) {
	        $('.nav_wrapper').css("z-index", 100);
        }
        
        enable_scroll();
    });

    // hides the popup if user clicks anywhere outside the container
    $('.bg').click(function(){
    	$('.bg').hide();
        
        if( $(window).width() < 500 ) {
	        $('.nav_wrapper').css("z-index", 100);
        }
        
        enable_scroll();
    })
    // prevents the overlay from closing if user clicks inside the popup overlay
    $('.content_container').click(function(){
		return false;
	});

});