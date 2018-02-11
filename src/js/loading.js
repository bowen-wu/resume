export default function () {
    let view = View("#loading")

    let controller = Controller({
        init: function(){},
        bindEvents: function(){
            let view = this.view
            setTimeout(() => {
                this.active()
            },2500)
        },
        active: function(){
            this.view.classList.add('active')
        }
    })
    controller.init(view)
    //controller.init.call(controller,view)
}