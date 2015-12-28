var INITIAL_NAV_OFFSET = $("nav").offset().top;

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $( ".iowa-girls-code-camp-section" ).fadeIn(1500);

    $(window).scroll(function(){
    	scrollingNavBar();
	});




  }); // end of document ready

/*
	Creates the sticky nav effect when scrolling by the nav bar
*/
  function scrollingNavBar() {
   var scrollPos = $(document).scrollTop();
   	if (scrollPos > INITIAL_NAV_OFFSET) {  			
   		if (!($("nav").hasClass("navbar-stuck-to-top")) ) {
   			$("nav").addClass("navbar-stuck-to-top");
   		}
   	} else {
   		if ($("nav").hasClass("navbar-stuck-to-top")) {
   			$("nav").removeClass("navbar-stuck-to-top");
   		}
   	}
}

/* Smooth scrolling function */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      console.log(target);

      if (target.length) {
        $('html,body').animate({ scrollTop:  (target.selector == "#about-text") ? (INITIAL_NAV_OFFSET + 1) : (target.offset().top - 50)  }, 1500);
        return false;
      }
    }
  });
});

})(jQuery); // end of jQuery name space
