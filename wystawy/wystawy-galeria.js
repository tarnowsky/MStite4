$(".scrollBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".justForScrollBtn").offset().top},'slow');
});

AOS.init();