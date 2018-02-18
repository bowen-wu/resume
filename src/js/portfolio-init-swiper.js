export default function () {
    let view = View('.swiper-container')
    let controller = Controller({
        swiper: null,
        swiperOptions: {
            loop: true,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init() {
            this.initSwiper()
        },
        initSwiper() {
            this.swiper = new Swiper(view, this.swiperOptions)
        },
        bindEvents() {
            window.selfSwiper = () => {
                return this.swiper
            }
        }
    })
    controller.init(view)
}
