$(function(){
    $('.nav-btn').on('click', function(){
        $(this).toggleClass('slideOn');
        $('#hanyul-header .right').toggleClass('slideOn');
        $('#hanyul-header').toggleClass('slideOn');
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
    });
});
