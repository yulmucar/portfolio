$(function () {
  //링크방지
  $('a').click(function (e) {
    e.preventDefault();
  });

  /// 🌜 스크립트 시작 🌛
  //슬라이드
  var swiper = new Swiper(".design", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

})