$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }

        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .nav-items li a').click(function(){

        $('html').css("scrollBehavior", "smooth");
        $('.navbar .nav-items').removeClass("active");
        $('.nav-btn i').removeClass("active");

    });

    var typed = new Typed(".typing", {
        strings: ["Android Developer", "Frontend Web Developer","Student", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle navbar
    $('.nav-btn').click(function(){
        $('.navbar .nav-items').toggleClass("active");
        $('.nav-btn i').toggleClass("active");
    });
});