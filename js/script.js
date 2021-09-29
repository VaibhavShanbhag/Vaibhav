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
        $('html').animate({scrollTo: 0})
    });

    var typed = new Typed(".typing", {
        strings: ["Android Development", "Web Development","Student", "Youtuber"],
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