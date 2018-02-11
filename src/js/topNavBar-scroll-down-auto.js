export default function(){
    let view = View("#topNavBar")
    let controller = Controller({
        init: function(view){},
        bindEvents: function(){
            setTimeout(() => {
                this.normal()
            },2500)
        },
        normal: function(){
            this.view.classList.add('normally')
        }
    })
    controller.init(view)
}