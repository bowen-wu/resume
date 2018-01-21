!function () {
    let view = View("#websiteAbout");
    let controller = {
        view: null,
        init: function () {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            setTimeout(() => {
                this.active()
            }, 2500)
        },
        active: function(){
            this.view.classList.add("scrollActive");
        }
    }
    controller.init(view)
}.call()

