export default function () {
    let view = View("#websiteAbout")
    let controller = Controller({
        init(view) { },
        bindEvents() {
            setTimeout(() => {
                this.active()
            }, 2500)
        },
        active() {
            this.view.classList.add("scrollActive")
        }
    })
    controller.init(view)
}

