export default function () {
    let view = View("#topNavBar")
    let controller = Controller({
        init(view) { },
        bindEvents() {
            setTimeout(() => {
                this.normal()
            }, 2500)
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active() {
            this.view.classList.add('sticky')
        },
        deactive() {
            this.view.classList.remove('sticky')
        },
        normal() {
            this.view.classList.add('normal')
        }
    })
    controller.init(view)
}

