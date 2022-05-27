$(document).ready(function () {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 250) {
            $('.navbar-pp').addClass('top-nav-collapse');
        }
        if ($(window).scrollTop() < 251) {
            $('.navbar-pp').removeClass('top-nav-collapse');
        }
    });
});
