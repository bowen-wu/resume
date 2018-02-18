export default function () {
    let view = View('.portfolio')
    let controller = Controller({
        init() {
            this.portfolioAll = view.querySelector('#portfolioAll')
            this.portfolioFrame = view.querySelector('#portfolioFrame')
            this.portfolioProtogenesis = view.querySelector('#portfolioProtogenesis')
            this.wrapper = view.querySelectorAll('.swiper-container > .swiper-wrapper')[0]
            this.portfolioBar = view.querySelector('#portfolioBar')
            this.codeLink = view.querySelectorAll('.swiper-container .githubLink')
            this.swiper = window.selfSwiper()
        },
        bindEvents() {
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
                this.active(this.swiper.activeIndex)
            }
            this.wrapper.onmouseleave = () => {
                this.playStatus('start')
                this.deactive(this.swiper.activeIndex)
            }
        },
        changeClassName(className) {
            this.portfolioBar.className = `sliderBar-inner ${className}`
        },
        playStatus(status) {
            this.swiper.autoplay[status]()
        },
        active(index) {
            this.codeLink[index].classList.add('active')
        },
        deactive(index) {
            this.codeLink[index].classList.remove('active')
        }
    })
    controller.init(view)
}


