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
});