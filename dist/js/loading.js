"use strict";

!function () {
    var view = View("#loading");

    var controller = Controller({
        init: function init() {},
        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            setTimeout(function () {
                _this.active();
            }, 2500);
        },
        active: function active() {
            this.view.classList.add('active');
        }
    });
    controller.init(view);
    //controller.init.call(controller,view)
}.call();