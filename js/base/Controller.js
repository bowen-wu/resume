window.Controller = function (options) {
    let init = options.init
    let obj = {
        view: null,
        model: null,
        init: function (view,model) {
            console.log('this',this)
            this.view = view
            this.model = model
            this.model.init()
            init.call(this)
            this.bindEvents() // this.bindEvents.call(this)
        }
    }

    Object.keys(options).forEach((key) => {
        if(key !== 'init'){
            // obj['key'] === options.key
            obj[key] = options[key]
        }
    })
    return obj
}