export default function () {
    let view = View("#topNavBar")
    let controller = Controller({
        init(view) { },
        bindEvents() {
            setTimeout(() => {
                this.normal()
            }, 2500)
        },
        normal() {
            this.view.classList.add('normally')
        }
    })
    controller.init(view)
}