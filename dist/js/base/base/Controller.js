window.Controller = function (options) {
    let { init } = options
    let obj = {
        init(view, model) {
            this.view = view
            if (model) {
                this.model = model
                this.model.init()
            }
            init.call(this)
            this.bindEvents()
        }
    }
    Object.keys(options).forEach((key) => {
        if (key !== 'init') {
            obj[key] = options[key]
        }
    })
    return obj
}