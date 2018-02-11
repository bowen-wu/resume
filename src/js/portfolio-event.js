export default function () {
    let view = View('.portfolio')
    let controller = Controller({
        portfolioAll: null,
        portfolioFrame: null,
        portfolioProtogenesis: null,
        wrapper: null,
        portfolioBar: null,
        swiper: null,
        codeLink: null,
        init: function () {
            this.portfolioAll = view.querySelector('#portfolioAll')
            this.portfolioFrame = view.querySelector('#portfolioFrame')
            this.portfolioProtogenesis = view.querySelector('#portfolioProtogenesis')
            this.wrapper = view.querySelectorAll('.swiper-container > .swiper-wrapper')[0]
            this.portfolioBar = view.querySelector('#portfolioBar')
            this.codeLink = view.querySelectorAll('.swiper-container .githubLink')
            this.swiper = window.selfSwiper()
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
                // console.log(this.swiper.activeIndex)
                this.active(this.swiper.activeIndex)
                // console.log(2)
            }
            this.wrapper.onmouseleave = () => {
                this.playStatus('start')
                this.deactive(this.swiper.activeIndex)
            }
        },
        changeClassName: function(className){
            this.portfolioBar.className = `sliderBar-inner ${className}`
        },
        playStatus: function(status){
            this.swiper.autoplay[status]()
        },
        active: function(index){
            // console.log(this.codeLink)
            this.codeLink[index].classList.add('active')
        },
        deactive: function(index){
            this.codeLink[index].classList.remove('active')
        }
    })
    controller.init(view)
}


