$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle navbar
    $('.nav-btn').click(function(){
        $('.navbar .nav-items').toggleClass("active");
        $('.nav-btn i').toggleClass("active");
    });
});