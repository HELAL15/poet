


$(document).ready(function(){
    // dir
    var bodyDir = $('body').css('direction')
    var dirAr
    if(bodyDir == "rtl"){
      dirAr= true
    }
    else{
      dirAr = false
    }


    
    
    // loader
    $('#loading').fadeOut(500);

    new WOW().init();



    $('select').niceSelect();









//      play and pause video       //


let play = document.getElementById("play");
let pause = document.getElementById("pause");
let video = document.getElementById("video");
let overlay = document.getElementById("overlay");


if (play !== null) {
    
    pause.style.display = "none";

    
    play.addEventListener("click", function() {
        
        play.style.display = "none";
        pause.style.display = "flex";
        overlay.classList.add("active");
        video.play();
    });

    pause.addEventListener("click", function() {
        
        pause.style.display = "none";
        play.style.display = "flex";
        overlay.classList.remove("active");
        video.pause();
    });
}




    

function showScrollTopBtn() {
  let scroll = window.scrollY;
  let isNavTop = scroll < 250;
  let scrollBtn = document.querySelector('.scrollTop');
  if ( isNavTop) {
    scrollBtn.classList.remove('show');
    
  } else {
    scrollBtn.classList.add('show');
  }
}
let scrollBtn = document.querySelector('.scrollTop');

if(scrollBtn != null){
  window.addEventListener('scroll', showScrollTopBtn);
  scrollBtn.addEventListener("click", ()=>{
    window.scrollTo({top:0, left:0 });
  })
}


    const navToggler = document.getElementById("nav-toggler");
    const collapse = document.querySelector(".navbar-collapse");
    const close = document.getElementById("close");

    close.addEventListener("click" , ()=>{
      collapse.classList.remove("active")
    })

    navToggler.addEventListener("click" , ()=>{
      collapse.classList.toggle("active")
    })




    const screensSwiper = new Swiper('.screens .swiper', {
      slidesPerView: 4,
      spaceBetween: 40,
      breakpoints: {
        320: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grid: {
        rows: 1,
      },
      mousewheel: {
        forceToAxis: true,
      },
      // Optional parameters
      direction: 'horizontal',
      loop: true,


      // Autoplay settings
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },


      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

    });





    //end
});







