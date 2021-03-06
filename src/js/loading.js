!function () {
    let view = View("#loading")
    let controller = Controller({
        init(view) { },
        bindEvents() {
            let view = this.view
            setTimeout(() => {
                this.active()
            }, 2500)
        },
        active() {
            this.view.classList.add('active')
        }
    })
    controller.init(view)
}.call()