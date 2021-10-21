$(document).ready(function(){
	/*For modal*/
	$('.modal').modal({
		startingTop: '80%',
		inDuration: 1000,
		outDuration: 1000
	});



	/*For tooltip*/
	$('.tooltipped').tooltip();
	//For search box
	$('input.autocomplete').autocomplete({
        data:{
        	"Mobile Recharge":null,
        	"Broadband Recharge":null,
        	"DTH Recharge":'assets/media/wow.png'
        }
	});

//For sidenav
$('.sidenav').sidenav();
//For Select
$('select').formSelect();
//For Fixed Action Button
$('.fixed-action-btn').floatingActionButton();
//For Carousel
 $('.carousel.carousel-slider').carousel({
    fullWidth: true,

  });
 //Autoplay For Carousel
 function autoplay(){
  $('.carousel').carousel('next');
  setTimeout(autoplay,6500);
 }
 autoplay();

//Move next carousel
$('.moveNextCarousel').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('next');
})

//Move next carousel
$('.movePrevCarousel').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('previous');
})

//For Click to copy QR link
$('.copyClick').click(function(){
	$(this).focus();
	$(this).select();
	document.execCommand('copy');
});

});

// Mobile Side Menu Initialization
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
    	preventScrolling: false
    });
  });


  

