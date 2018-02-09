'use strict';

window.Controller = function (options) {
    var _init = options.init;
    var obj = {
        view: null,
        model: null,
        init: function init(view, model) {
            this.view = view;
            if (model) {
                this.model = model;
                this.model.init();
            }
            _init.call(this);
            this.bindEvents(); // this.bindEvents.call(this)
        }
    };

    Object.keys(options).forEach(function (key) {
        if (key !== 'init') {
            // obj['key'] === options.key
            obj[key] = options[key];
        }
    });
    return obj;
};