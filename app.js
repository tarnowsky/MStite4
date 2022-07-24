const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');

		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
}
// Go up button
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1200) {
      $('.goUpBtn').fadeIn("slow");
    } else {
      $('.goUpBtn').fadeOut("slow");
    }
});
// Destination for Go up button
$(".goUpBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".goback-a").offset().top},'slow');
});

//Expand gallery
$( document ).ready(function() {
	var img_container = $(".img-container");
	if (img_container.length >= 10){
		$(".wystawy-gallery").hide();	
	}
	else{
		$(".UnexpandBtn").css("display", "none");
	}
});
$(".UnexpandBtn").click(function(){
	if ($(".UnexpandBtn p").text() == 'Rozwiń'){
		$(".UnexpandBtn p").text("Zwiń");
		$(".wystawy-gallery").show(1000);
	}
	else{
		$(".UnexpandBtn p").text("Rozwiń");
		$(".wystawy-gallery").hide(1000);
	}
});
navSlide();