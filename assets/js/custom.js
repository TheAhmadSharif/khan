/*Slider start*/

//Initialise Bootstrap Carousel Touch Slider
// Curently there are no option available.

$('#bootstrap-touch-slider').bsTouchSlider();



/*End Slider*/




/*for scroll menu */

$(window).scroll(function() {
if ($(this).scrollTop() > 38){  
	 $('.navbar').addClass("sticky");
  
    
  }
  else{
    $('.navbar').removeClass("sticky");
  }
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

  /* client area */

 






