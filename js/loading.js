!function () {
    let view = View("#loading")

    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents: function(){
            let view = this.view
            setTimeout(() => {
                this.active()
            },2500)
            // setTimeout(function () {
            //     this.active() //this.active.call(this)
            // }.bind(this), 2500)
        },
        active: function(){
            this.view.classList.add('active')
        }
    }
    controller.init(view)
    //controller.init.call(controller,view)
}.call()
