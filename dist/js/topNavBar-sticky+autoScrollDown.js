'use strict';

!function () {
    var view = View("#topNavBar");
    var controller = Controller({
        init: function init() {},
        bindEvents: function bindEvents() {
            var _this = this;

            setTimeout(function () {
                _this.normal();
            }, 2500);
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    // console.log('this === controller',this === controller)   true
                    _this.active();
                } else {
                    _this.deactive();
                }
            });
        },
        active: function active() {
            this.view.classList.add('sticky');
        },
        deactive: function deactive() {
            this.view.classList.remove('sticky');
        },
        normal: function normal() {
            this.view.classList.add('normal');
        }
    });
    controller.init(view);

    // let controller = {
    //     view: null,
    //     init: function () {
    //         this.view = view
    //         this.bindEvents()
    //         // this.bingEvents.call(this)
    //     },
    //     bindEvents: function () {
    //         setTimeout(() => {
    //             this.normal()
    //         },2500)
    //         window.addEventListener('scroll', () => {
    //             if (window.scrollY > 50) {
    //                 // console.log('this === controller',this === controller)   true
    //                 this.active()
    //             } else {
    //                 this.deactive()
    //             }
    //         })
    //     },
    //     active: function(){
    //         this.view.classList.add('sticky')
    //     },
    //     deactive: function(){
    //         this.view.classList.remove('sticky')
    //     },
    //     normal: function(){
    //         this.view.classList.add('normal')
    //     }
    // }
    // controller.init(view)
}.call();