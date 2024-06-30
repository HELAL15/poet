$(document).ready(function() {

  // Initialize Swiper for quotes
  const qoutes = new Swiper('.qoutes .swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
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
      pauseControl.show();
    });

    pauseControl.on('click', function() {
      video.pause();
      videoControls.removeClass('active')
      playControl.show();
      pauseControl.hide();
    });

    $(video).on('play', function() {
      videoControls.addClass('active')
      playControl.hide();
      pauseControl.show();
    });

    $(video).on('pause', function() {
      videoControls.removeClass('active')
      playControl.show();
      pauseControl.hide();
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
    } else {
      video.pause();
      $(".hero-video").removeClass("active")
      $(".play-video").show()
      $(".pause-video").hide()
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
      scrollContainer.scrollTop = scrollContentHeight * scrollPercentage * 15;
  });
  

  // Determine text direction
  var bodyDir = $('body').css('direction');
  var dirAr = (bodyDir === "rtl");

  // Fade out loader
  $('#loading').fadeOut(500);

  // Initialize WOW.js
  new WOW().init();

  // Initialize niceSelect
  $('select').niceSelect();

  // Scroll to top button functionality
  function showScrollTopBtn() {
    let scroll = $(window).scrollTop();
    let scrollBtn = $('.scrollTop');
    if (scroll < 250) {
      scrollBtn.removeClass('show');
    } else {
      scrollBtn.addClass('show');
    }
  }

  let scrollBtn = $('.scrollTop');
  if (scrollBtn.length) {
    $(window).on('scroll', showScrollTopBtn);
    scrollBtn.on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  }

  // Commented out navbar toggler functionality
  // const navToggler = $('#nav-toggler');
  // const collapse = $('.navbar-collapse');
  // const close = $('#close');

  // close.on('click', function() {
  //   collapse.removeClass('active');
  // });

  // navToggler.on('click', function() {
  //   collapse.toggleClass('active');
  // });

});
