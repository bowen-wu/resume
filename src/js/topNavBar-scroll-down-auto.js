!function(){
    let view = View("topNavBar")
    let controller = Controller({
        init: function(){},
        bindEvents: function(){
            setTimeout(() => {
                this.normal()
            },2500)
        },
        normal: function(){
            this.view.classList.add('normal')
        }
    })
    controller.init(view)
}.call()