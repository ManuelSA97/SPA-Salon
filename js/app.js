// window.swiper = new Swiper({
//     el: '.swiper-wrapper',
//     slideClass: 'swiper-slide',
//     createElements: true,
//     loop: true,
//     autoplay: {
//         delay: 3000
//     },
//     navigation: {
//         el: '.swiper-wrapper',
//       },
//     navigation: true,
//     pagination: true,
//     effect: "cube",
//       grabCursor: true,
//       cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       },
    
// });

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    el: '.swiper-wrapper',
    slideClass: 'swiper-slide',
    createElements: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        el: '.swiper-wrapper',
      },
    navigation: true,
    pagination: true,
  });