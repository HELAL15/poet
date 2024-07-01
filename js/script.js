$(document).ready(function() {
  let audio = new Audio('../images/music.mp3');
  // Play the audio
  audio.play();


  // Determine text direction
  var bodyDir = $('body').css('direction');
  var dirAr = (bodyDir === "rtl");

  // Fade out loader
  $('#loading').fadeOut(1500);

  // Initialize WOW.js
  new WOW().init();



  // Initialize Swiper for quotes
  const qoutes = new Swiper('.qoutes .swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    dir: dirAr,
    mousewheel: {
      forceToAxis: true,
    },
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });


  // Initialize Swiper for books2
  const books2 = new Swiper('.books2 .swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    dir: dirAr,
    allowTouchMove: false,
    mousewheel: {
      forceToAxis: true,
    },
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });




  // Handle video play and pause controls
  $('.video-container').each(function() {
    const video = $(this).find('video').get(0);
    const videoControls = $(this).find('.video-controls')
    const playControl = $(this).find('.play-control');
    const pauseControl = $(this).find('.pause-control');

    playControl.on('click', function() {
      video.play();
      videoControls.addClass('active')
      playControl.hide();
      pauseControl.css('display', 'flex');
        audio.pause();
    });

    pauseControl.on('click', function() {
      video.pause();
      videoControls.removeClass('active')
      playControl.show();
      pauseControl.hide();
        audio.play();
    });

    $(video).on('play', function() {
      videoControls.addClass('active')
      playControl.hide();
      pauseControl.css('display', 'flex');
        audio.pause();
    });

    $(video).on('pause', function() {
      videoControls.removeClass('active')
      playControl.show();
      pauseControl.hide();
        audio.play();
    });
  });


  $(".pause-video").hide()
  let heroVideo = $(".hero-video video")
  let click = $(".click")

  click.on("click", () => {
    let video = heroVideo.get(0);
    
    if (video.paused) {
      video.play();
      $(".hero-video").addClass("active")
      $(".play-video").hide()
      $(".pause-video").show()
        audio.pause();
    } else {
      video.pause();
      $(".hero-video").removeClass("active")
      $(".play-video").show()
      $(".pause-video").hide()
        audio.play();
    }
  });



$(".navbar-toggler-menu").on("click",()=>{
  $(".navbar-collapse").toggleClass("active")
})



  document.addEventListener('scroll', function () {
    const scrollContainer = document.querySelector('.honoring-imgs');
      const scrollContent = scrollContainer.querySelector('.img');

      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      const scrollContentHeight = scrollContent.scrollHeight + scrollContainer.clientHeight;
      scrollContainer.scrollTop = scrollContentHeight * scrollPercentage * 10;
  });
  


});
