!function () {
    let view = View("#websiteAbout")
    let controller = Controller({
        init: function () {},
        bindEvents: function () {
            setTimeout(() => {
                this.active()
            }, 2500)
        },
        active: function(){
            this.view.classList.add("scrollActive");
        }
    })
    controller.init(view)
}.call()

