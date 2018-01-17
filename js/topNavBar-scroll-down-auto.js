!function(){
    let view = document.getElementById("topNavBar")
    let controller = {
        view: null,
        init: function(){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            setTimeout(() => {
                this.normal()
            },2500)
        },
        normal: function(){
            this.view.classList.add('normal')
        }
    }
    controller.init(view)
}.call()