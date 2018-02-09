'use strict';

!function () {
    var view = View('.topNavBar nav');
    var controller = Controller({
        lis: null,
        aTags: null,
        currentSection: null,
        init: function init() {
            this.lis = this.view.querySelectorAll('ul > li');
            this.aTags = this.view.querySelectorAll('ul > li > a');
            this.initAnimation();
        },
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function bindEvents() {
            var _this = this;

            for (var i = 0, len = this.lis.length; i < len; i++) {
                this.lis[i].onmouseenter = function (event) {
                    _this.active(event);
                };
                this.lis[i].onmouseleave = function (event) {
                    _this.deactive(event);
                };
                this.lis[i].onclick = function (event) {
                    _this.currentSection = document.querySelector(event.target.getAttribute('href'));
                    _this.topNavBarClickEvent(event);
                    // this.topNavBarClickEvent.call(this,event)
                };
            }
        },
        active: function active(event) {
            event.currentTarget.classList.add('active');
        },
        deactive: function deactive(event) {
            event.currentTarget.classList.remove('active');
        },
        topNavBarClickEvent: function topNavBarClickEvent(event) {
            event.preventDefault();
            this.goToAssignPlace();
            // this.goToAssignPlace.call(this)
        },
        goToAssignPlace: function goToAssignPlace() {
            var coords = { y: window.scrollY };
            var tween = new TWEEN.Tween(coords).to({ y: this.currentSection.offsetTop - 100 }, 1000).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        }
    });
    controller.init(view);
}.call();