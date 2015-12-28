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

})(jQuery); // end of jQuery name space
