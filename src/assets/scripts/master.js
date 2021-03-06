$(document).ready(function(e) {
    $(document).on("scroll", function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $('.header').addClass("stickyBorder");
            $('.widget-sidebar-container').addClass('scroll');
        } else {
            $('.header').removeClass('stickyBorder')
            $('.widget-sidebar-container').removeClass('scroll');
        }
    });
    alamatHeight();

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

    // ALAMAT SECTION BACKGROUND CHANGE
    $(".alamat .content").on("afterChange", function() {
        var bg = $('.slick-active .alamat-background').val();
        $('.alamat').css({
            'background': 'url(' + bg + ') top center no-repeat fixed',
            'background-size': 'cover'
        });
    });

    //HEADER MENU
    $(document).on('click', 'header .menu-container .burger-menu', function(event) {
        event.preventDefault();
        var burgerMenu = $('header .menu-container').clone();

        $('body').addClass('menu-opened');
        $('.menu-expanded').fadeIn('fast');

        $('.menu-expanded > .container').prepend(burgerMenu);
    });

    // WIKIA MENU
    $(document).on('click', '.openTableOfContents', function(event) {
        event.preventDefault();

        $('body').toggleClass('menu-opened');
    });

    $(document).on('click', '.menu-expanded .menu-container .burger-menu, .menu-expanded li:not(.sansinukob) > a', function(event) {
        event.preventDefault();
        $('body').removeClass('menu-opened');
        $('.menu-expanded').fadeOut('fast');

        $('.menu-expanded > .container .menu-container').remove();
        $('.menu-expanded .main-menu .sansinukob .sub').slideToggle();
        $('.menu-expanded .main-menu .sansinukob').toggleClass('expanded');
    });

    $(document).on('click', '.menu-expanded .main-menu .sansinukob a ', function(event) {
        $('.menu-expanded .main-menu .sansinukob .sub').slideToggle();
        $('.menu-expanded .main-menu .sansinukob').toggleClass('expanded');
    });

    //MAP POP-UP

    $(document).on('click', '.focus img', function(event) {
        $('body').css('overflow', 'hidden');
    });
    $(document).on('click', '.pop-up .close a', function(event) {
        $('body').css('overflow', 'auto');
    });

    //Widget buttons
    $(document).on('click', '.widget-btn', function(event) {
        event.preventDefault();
        var widgetTarget = $(this).data("target");
        $(widgetTarget).toggleClass('show');
        $(widgetTarget).fadeIn(200);
        $('body').toggleClass('lightbox-open');
    });

    //Sidebar close
    $(document).on('click', '.sidebar-header .close-sidebar', function(event) {
        event.preventDefault();
        $(this).parent().parent().removeClass('show');
        $('body').removeClass("lightbox-open");
    });

    //Lightbox close button
    $(document).on('click', '.lightbox .btn-close', function(e) {
        $(this).closest('.lightbox').fadeOut();
        $('body').removeClass("lightbox-open");
        e.preventDefault();
    });

    //Lightbox close button
    $(document).on('click', '.sidebar-chat .tab', function(e) {
        e.preventDefault();
        var tabTarget = $(this).data("target");
        $(".sidebar-chat .tab").removeClass('active');
        $(this).toggleClass('active');
        $(".chat-convo").removeClass('active');
        $(tabTarget).toggleClass('active');
        if (tabTarget == "#globalChat") {
            $(".sidebar-chat .sidebar-header").addClass("sansinukob-theme");
        } else {
            $(".sidebar-chat .sidebar-header").removeClass("sansinukob-theme");
        }
    });

    //Collapsible
    var allCollapsible = $('.collapsible-item .collapsible-content');
    $(document).on('click', '.collapsible-wrapper .collapsible-item .collapsible-header', function(e) {
        if ($(this).parent().parent().hasClass('show')) {
            $(this).parent().parent().find("li .collapsible-content").slideUp(350);
            $(this).parent().parent().removeClass('show');
        } else {
            allCollapsible.slideUp();
            $(this).parent().parent().find("li .collapsible-content").slideDown(350);
            $(this).parent().parent().toggleClass('show');
        }
        return false;
    });

    //PAGUURI QUESTIONS NEXT

    $(document).on('click', 'app-paguuri-questions .btn-next', function(event) {
        event.preventDefault();
        $("#paguuri-questions").slick('slickNext');
    });

    window.addEventListener("orientationchange", function() {
        alamatHeight();
    }, false);

    $(document).on('scroll', "body *", function() {
        console.log('hello');
    });
});


//ANG ALAMAT SLIDE HEIGHT
function alamatHeight(event) {
    var maxHeight = 0;
    $('.alamat .slide').each(function() {
        if ($(this).find('div:last-child').height() > maxHeight) {
            maxHeight = $(this).find('div:last-child').height();
        }
    });
    $('.alamat .slide div:last-child').css('height', maxHeight + 'px');
}