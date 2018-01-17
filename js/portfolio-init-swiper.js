!function () {
    let view = document.querySelector('.swiper-container')
    view.style.outline = '1px solid red'
    var mySwiper = new Swiper(view, {
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
        },
    })
    window.selfSwiper = function(){
        return mySwiper
    }
}.call()
