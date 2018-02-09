'use strict';

!function () {
    var view = View('.swiper-container');
    var controller = Controller({
        swiper: null,
        swiperOptions: {
            loop: true,
            autoplay: {
                delay: 4000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        init: function init() {
            this.initSwiper();
        },
        initSwiper: function initSwiper() {
            this.swiper = new Swiper(view, this.swiperOptions);
        },
        bindEvents: function bindEvents() {
            var _this = this;

            window.selfSwiper = function () {
                return _this.swiper;
            };
        }
    });
    controller.init(view);

    // let controller = {
    //     view: null,
    //     swiper: null,
    //     swiperOptions: {
    //         loop: true,
    //         autoplay: {
    //             delay: 4000,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         }
    //     },
    //     init: function () {
    //         this.view = view
    //         this.initSwiper()
    //         this.bindEvents()
    //     },
    //     initSwiper: function () {
    //         this.swiper = new Swiper(view, this.swiperOptions)
    //     },
    //     bindEvents: function () {
    //         window.selfSwiper = () => {
    //             return this.swiper
    //         }
    //     }
    // }
    // controller.init(view)
}.call();