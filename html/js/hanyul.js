$(function(){
    $('.nav-btn').on('click', function(){
        $(this).toggleClass('slideOn');
        $('#hanyul-header .right').toggleClass('slideOn');
        $('#hanyul-header').toggleClass('slideOn');
    });
});