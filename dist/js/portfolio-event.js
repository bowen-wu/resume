'use strict';

!function () {
    var view = View('.portfolio');
    var controller = Controller({
        portfolioAll: null,
        portfolioFrame: null,
        portfolioProtogenesis: null,
        wrapper: null,
        portfolioBar: null,
        swiper: null,
        codeLink: null,
        init: function init() {
            this.portfolioAll = view.querySelector('#portfolioAll');
            this.portfolioFrame = view.querySelector('#portfolioFrame');
            this.portfolioProtogenesis = view.querySelector('#portfolioProtogenesis');
            this.wrapper = view.querySelectorAll('.swiper-container > .swiper-wrapper')[0];
            this.portfolioBar = view.querySelector('#portfolioBar');
            this.codeLink = view.querySelectorAll('.swiper-container .githubLink');
            this.swiper = window.selfSwiper();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            this.portfolioAll.onclick = function () {
                _this.changeClassName('sliderBarStateFirst');
            };
            this.portfolioFrame.onclick = function () {
                _this.changeClassName('sliderBarStateSecond');
            };
            this.portfolioProtogenesis.onclick = function () {
                _this.changeClassName('sliderBarStateThird');
            };
            this.wrapper.onmouseenter = function () {
                _this.playStatus('stop');
                // console.log(this.swiper.activeIndex)
                _this.active(_this.swiper.activeIndex);
                // console.log(2)
            };
            this.wrapper.onmouseleave = function () {
                _this.playStatus('start');
                _this.deactive(_this.swiper.activeIndex);
            };
        },
        changeClassName: function changeClassName(className) {
            this.portfolioBar.className = 'sliderBar-inner ' + className;
        },
        playStatus: function playStatus(status) {
            this.swiper.autoplay[status]();
        },
        active: function active(index) {
            // console.log(this.codeLink)
            this.codeLink[index].classList.add('active');
        },
        deactive: function deactive(index) {
            this.codeLink[index].classList.remove('active');
        }
    });
    controller.init(view);
}.call();