$(document).ready(function(e) {

    $('img[usemap]').rwdImageMaps();

    $('area').data('maphilight');

    $('.upload-photo .upload .browse, .upload-photo .upload input').click(function() {
        event.preventDefault();
        $('.profile-picture')[0].click();
    });

    $(document).on('change', '.profile-picture', function(event) {
        $('.upload input').val($(this)[0].files[0].name);

        return false;
    });

    $(document).on('click', '.goNext', function(event) {
        event.preventDefault();
        $("#tourSlide").slick('slickNext');
    });

    $(".alamat .content").on("afterChange", function() {
        var bg = $('.slick-active .alamat-background').val();
        $('.alamat').css({
            'background': 'url('+bg+') top center no-repeat',
            'background-size': 'cover'
        });
    });

    $(document).on('click', 'header .menu-container .burger-menu', function(event) {
        event.preventDefault();
        var burgerMenu = $('header .menu-container').clone();

        $('body').addClass('menu-opened');
        $('.menu-expanded').fadeIn('fast');

        $('.menu-expanded > .container').prepend(burgerMenu);
    });

    $(document).on('click', '.menu-expanded .menu-container .burger-menu', function(event) {
        event.preventDefault();
        $('body').removeClass('menu-opened');
        $('.menu-expanded').fadeOut('fast');

        $('.menu-expanded > .container .menu-container').remove();
    });

    $(document).on('click', '.menu-expanded .main-menu .sansinukob a ', function(event) {
        $('.menu-expanded .main-menu .sansinukob .sub').slideToggle();
        $('.menu-expanded .main-menu .sansinukob').toggleClass('expanded');
    });

    //Widget buttons
    $(document).on('click', '.widget-btn', function(event) {
        event.preventDefault();
        var widgetTarget = $(this).data("target");
        $(widgetTarget).toggleClass('show');
    });
    
    //Sidebar close
    $(document).on('click', '.sidebar-header .close-sidebar', function(event) {
        event.preventDefault();
        $(this).parent().parent().removeClass('show');
    });
    
    //Lightbox close button
    $(document).on('click', '.lightbox .btn-close', function(e) {
        $(this).closest('.lightbox').fadeOut();
        $('body').removeClass("lightbox-open");
        e.preventDefault();
    });

    //Lightbox close button
    $(document).on('click', '.sidebar-chat .tab', function(e) {
        event.preventDefault();
        var tabTarget = $(this).data("target");
        //$(this).toggleClass();
        $(".sidebar-chat .tab").removeClass('active');
        $(this).toggleClass('active');
        $(".chat-convo").removeClass('active');
        $(tabTarget).toggleClass('active');
        console.log(tabTarget);
    });

});