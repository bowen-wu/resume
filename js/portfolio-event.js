!function () {
    let view = document.querySelector('.portfolio')
    let controller = {
        view: null,
        portfolioAll: null,
        portfolioFrame: null,
        portfolioProtogenesis: null,
        wrapper: null,
        portfolioBar: null,
        swiper: null,
        init: function () {
            this.view = view
            this.portfolioAll = view.querySelector('#portfolioAll')
            this.portfolioFrame = view.querySelector('#portfolioFrame')
            this.portfolioProtogenesis = view.querySelector('#portfolioProtogenesis')
            this.wrapper = view.querySelectorAll('.swiper-container > .swiper-wrapper')[0]
            this.portfolioBar = view.querySelector('#portfolioBar')
            this.swiper = window.selfSwiper()
            this.bindEvents()
        },
        bindEvents: function () {
            this.portfolioAll.onclick = () => {
                this.changeClassName('sliderBarStateFirst')
            }
            this.portfolioFrame.onclick = () => {
                this.changeClassName('sliderBarStateSecond')
            }
            this.portfolioProtogenesis.onclick = () => {
                this.changeClassName('sliderBarStateThird')
            }
            this.wrapper.onmouseenter = () => {
                this.playStatus('stop')
            }
            this.wrapper.onmouseleave = () => {
                this.playStatus('start')
            }
        },
        changeClassName: function(className){
            this.portfolioBar.className = `sliderBar-inner ${className}`
        },
        playStatus: function(status){
            this.swiper.autoplay[status]()
        }
    }
    controller.init(view)
}.call()


