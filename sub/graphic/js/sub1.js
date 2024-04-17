$(function () {
    //해더 페이지이동
    $('.header nav ul li a').click(function (e) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    })
    
    //스와이퍼 슬라이드
    /* var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            loop: true,
            centeredSlides: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    }); */
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });

})