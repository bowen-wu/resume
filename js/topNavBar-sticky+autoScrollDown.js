!function () {
    let view = document.getElementById("topNavBar")
    let controller = {
        view: null,
        init: function () {
            this.view = view
            this.bindEvents()
            // this.bingEvents.call(this)
        },
        bindEvents: function () {
            setTimeout(() => {
                this.normal()
            },2500)
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    // console.log('this === controller',this === controller)   true
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        },
        normal: function(){
            this.view.classList.add('normal')
        }
    }
    controller.init(view)
}.call()
