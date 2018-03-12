$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    $('area').data('maphilight');

    $('.questions .slick-dots .active').prevAll('li').addClass('before');
});