export default function () {
    let view = View('.topNavBar nav')
    let controller = Controller({
        init() {
            this.lis = this.view.querySelectorAll('ul > li')
            this.aTags = this.view.querySelectorAll('ul > li > a')
            this.initAnimation()
        },
        initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate)
                TWEEN.update(time);
            }
            requestAnimationFrame(animate)
        },
        bindEvents() {
            for (let i = 0, len = this.lis.length; i < len; i++) {
                this.lis[i].onmouseenter = (event) => {
                    this.active(event)
                }
                this.lis[i].onmouseleave = (event) => {
                    this.deactive(event)
                }
                this.lis[i].onclick = (event) => {
                    this.currentSection = document.querySelector(event.target.getAttribute('href'))
                    this.topNavBarClickEvent(event)
                }
            }
        },
        active(event) {
            event.currentTarget.classList.add('active')
        },
        deactive(event) {
            event.currentTarget.classList.remove('active')
        },
        topNavBarClickEvent(event) {
            event.preventDefault()
            this.goToAssignPlace()
        },
        goToAssignPlace() {
            var coords = { y: window.scrollY }
            var tween = new TWEEN.Tween(coords)
                .to({ y: this.currentSection.offsetTop - 100 }, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    })
    controller.init(view)
}

