$(function () {
  /// 🌜 스크립트 시작 🌛

  //해더 페이지이동
  $('.header nav ul li a').click(function (e) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
  })


  //슬라이드
  var swiper = new Swiper(".design", {
    slidesPerView: 5,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


})