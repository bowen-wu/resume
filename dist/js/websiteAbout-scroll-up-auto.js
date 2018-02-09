"use strict";

!function () {
    var view = View("#websiteAbout");
    var controller = Controller({
        init: function init() {},
        bindEvents: function bindEvents() {
            var _this = this;

            setTimeout(function () {
                _this.active();
            }, 2500);
        },
        active: function active() {
            this.view.classList.add("scrollActive");
        }
    });
    controller.init(view);
}.call();