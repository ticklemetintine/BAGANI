(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: $('#background_video'),

    // Container element
    container: $('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: $('#play'),
    pauseButton: $('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'assets/images/backgrounds/video/desert/desert-evening.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      $('#video_cover').hide();
    }
  });
}());
