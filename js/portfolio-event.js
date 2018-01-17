!function () {
    let view = document.querySelector('.portfolio')
    view.style.outline = '1px solid red'
    let portfolioAll = view.querySelector('#portfolioAll')
    var portfolioFrame = view.querySelector('#portfolioFrame')
    var portfolioProtogenesis = view.querySelector('#portfolioProtogenesis')
    var wrapper = view.querySelectorAll('.swiper-container > .swiper-wrapper')[0]
    var portfolioBar = view.querySelector('#portfolioBar')
    portfolioAll.onclick = function () {
        portfolioBar.className = "sliderBar-inner sliderBarStateFirst"
    }
    portfolioFrame.onclick = function () {
        portfolioBar.className = "sliderBar-inner sliderBarStateSecond"
    }
    portfolioProtogenesis.onclick = function () {
        portfolioBar.className = "sliderBar-inner sliderBarStateThird"
    }
    wrapper.onmouseenter = () => {
        window.selfSwiper().autoplay.stop();
    }
    wrapper.onmouseleave = () => {
        window.selfSwiper().autoplay.start();
    }
}.call()


