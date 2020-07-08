// JavaScript Document

var navShowing = false;

$(".navBars").click(function (e) {
	if(navShowing == false){
		navShowing = true;
	  $( ".anchorHolder" ).animate({
    left: "+=280"
  }, 2000, function() {
    
  });
}else{
	navShowing = false;
	$( ".anchorHolder" ).animate({
    left: "-=280"
  }, 2000, function() {
    
  });		
		}
});