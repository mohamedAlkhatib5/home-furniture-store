var swiper = new Swiper(".mySwiper ", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    }
});

// **************
var swiper = new Swiper(".sale_sec ", {



    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,

    },
    breakpoints: {
        //  width window and slide
        1000: {
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 10,
        },
        300: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 10,
        }
    }

});