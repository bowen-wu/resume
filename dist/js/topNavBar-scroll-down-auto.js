"use strict";

!function () {
    var view = View("topNavBar");
    var controller = Controller({
        init: function init() {},
        bindEvents: function bindEvents() {
            var _this = this;

            setTimeout(function () {
                _this.normal();
            }, 2500);
        },
        normal: function normal() {
            this.view.classList.add('normal');
        }
    });
    controller.init(view);
}.call();