var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect : "fade",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    fadeEffect:{
        crossFade: true,
    }
    });