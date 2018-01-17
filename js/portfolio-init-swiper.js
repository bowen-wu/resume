!function () {
    let view = document.querySelector('.swiper-container')
    let controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            autoplay: {
                delay: 2500,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function () {
            this.view = view
            this.initSwiper()
            this.bindEvents()
        },
        initSwiper: function () {
            this.swiper = new Swiper(view, this.swiperOptions)
        },
        bindEvents: function () {
            window.selfSwiper = () => {
                return this.swiper
            }
        }
    }
    controller.init(view)
}.call()
