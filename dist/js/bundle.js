/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autoSlideUp = __webpack_require__(1);

var _autoSlideUp2 = _interopRequireDefault(_autoSlideUp);

var _leaveMessageOnce = __webpack_require__(2);

var _leaveMessageOnce2 = _interopRequireDefault(_leaveMessageOnce);

var _loading = __webpack_require__(3);

var _loading2 = _interopRequireDefault(_loading);

var _portfolioEvent = __webpack_require__(4);

var _portfolioEvent2 = _interopRequireDefault(_portfolioEvent);

var _portfolioInitSwiper = __webpack_require__(5);

var _portfolioInitSwiper2 = _interopRequireDefault(_portfolioInitSwiper);

var _topNavBarScrollDownAuto = __webpack_require__(6);

var _topNavBarScrollDownAuto2 = _interopRequireDefault(_topNavBarScrollDownAuto);

var _topNavBarStickyAutoScrollDown = __webpack_require__(7);

var _topNavBarStickyAutoScrollDown2 = _interopRequireDefault(_topNavBarStickyAutoScrollDown);

var _topNavBarUlClickScroll = __webpack_require__(8);

var _topNavBarUlClickScroll2 = _interopRequireDefault(_topNavBarUlClickScroll);

var _websiteAboutScrollUpAuto = __webpack_require__(9);

var _websiteAboutScrollUpAuto2 = _interopRequireDefault(_websiteAboutScrollUpAuto);

var _View = __webpack_require__(10);

var _View2 = _interopRequireDefault(_View);

var _Model = __webpack_require__(11);

var _Model2 = _interopRequireDefault(_Model);

var _Controller = __webpack_require__(12);

var _Controller2 = _interopRequireDefault(_Controller);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Model2.default)();
(0, _View2.default)();
(0, _Controller2.default)();
(0, _loading2.default)();
(0, _autoSlideUp2.default)();
(0, _leaveMessageOnce2.default)();
(0, _portfolioInitSwiper2.default)();
(0, _portfolioEvent2.default)();
(0, _topNavBarScrollDownAuto2.default)();
(0, _topNavBarStickyAutoScrollDown2.default)();
(0, _topNavBarUlClickScroll2.default)();
(0, _websiteAboutScrollUpAuto2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var topNavBarLis = document.querySelectorAll('.topNavBar nav>ul>li');
    window.addEventListener('scroll', function () {
        var scrollHeight = window.scrollY;
        // scrollNavActiveFirst(scrollHeight);//第一种方案
        scrollNavActiveSecond(scrollHeight); //第二种方案
    });

    //滚动后导航高亮 -- 第一种方案
    function scrollNavActiveFirst(scrollHeight) {
        var scrollEles = document.querySelectorAll('[data-scroll]');
        for (var i = 0, len = scrollEles.length; i < len; i++) {
            var currentEleOffsetTop = scrollEles[i].offsetTop;
            var currentEleHeight = scrollEles[i].offsetHeight;
            if (scrollHeight > currentEleOffsetTop - 150 && scrollHeight < currentEleOffsetTop + currentEleHeight - 150) {
                var currentTopNavBarLi = document.querySelector('[href="#' + scrollEles[i].id + '"]').parentNode;
                for (var _i = 0, _len = topNavBarLis.length; _i < _len; _i++) {
                    topNavBarLis[_i].classList.remove('clickScrollActive');
                }
                currentTopNavBarLi.classList.add('clickScrollActive');
            }
        }
    }
    //滚动后导航高亮 -- 第二种方案
    function scrollNavActiveSecond(scrollHeight) {
        var scrollEles = document.querySelectorAll('[data-scroll]');
        var minIndex = 0;
        for (var i = 1, len = scrollEles.length; i < len; i++) {
            if (Math.abs(scrollEles[i].offsetTop - scrollHeight) < Math.abs(scrollEles[minIndex].offsetTop - scrollHeight)) {
                minIndex = i;
            }
        }
        scrollEles[minIndex].classList.add('scrollActive');
        var currentTopNavBarLi = document.querySelector('[href="#' + scrollEles[minIndex].id + '"]').parentNode;
        for (var _i2 = 0, _len2 = topNavBarLis.length; _i2 < _len2; _i2++) {
            topNavBarLis[_i2].classList.remove('clickScrollActive');
        }
        currentTopNavBarLi.classList.add('clickScrollActive');
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var view = View('section.leaveMessage');

    var model = Model({ date: 'Message' });

    var controller = Controller({
        countMessages: null,
        ol: null,
        form: null,
        leaveMessageUsername: null,
        leaveMessageContent: null,
        leaveMessageSubmit: null,
        dateObj: null,
        readingData: function readingData() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                _this.countMessages.textContent = messages.length;
                messages.forEach(function (message) {
                    _this.dateObj = message;
                    _this.writePages();
                });
            });
        },
        init: function init() {
            this.countMessages = view.querySelector('#countMessage');
            this.ol = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.leaveMessageUsername = view.querySelector('#leaveMessageUsername');
            this.leaveMessageContent = view.querySelector('#leaveMessageContent');
            this.leaveMessageSubmit = view.querySelector('#leaveMessageSubmit');
            this.readingData(); // this.readingData.call(this)
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.leaveMessageUsername.addEventListener('input', function () {
                _this2.submitVerification();
            });
            this.leaveMessageContent.addEventListener('input', function () {
                _this2.submitVerification();
            });
            this.form.addEventListener('submit', function (event) {
                event.preventDefault();
                _this2.leaveMessageSubmit.classList.remove('active');
                var username = _this2.view.querySelector('#leaveMessageUsername').value;
                var content = _this2.view.querySelector('#leaveMessageContent').value;
                _this2.model.save({
                    'username': username,
                    'content': content
                }).then(function (object) {
                    _this2.countMessages.textContent = parseInt(_this2.countMessages.textContent, 10) + 1;
                    _this2.dateObj = object;
                    _this2.writePages();
                });
            });
        },
        submitVerification: function submitVerification() {
            if (this.leaveMessageUsername.value !== '' && this.leaveMessageContent.value !== '') {
                this.leaveMessageSubmit['disabled'] = false;
                this.leaveMessageSubmit.classList.add('active');
            } else {
                this.leaveMessageSubmit['disabled'] = true;
                this.leaveMessageSubmit.classList.remove('active');
            }
        },
        writePages: function writePages() {
            var message = this.dateObj;
            var liObj = this.createLi(); //this.createLi.call(this)
            liObj.title.textContent = message.attributes.username;
            liObj.content.textContent = message.attributes.content;
            var createTime = this.createTime(message.updatedAt);
            liObj.time.textContent = createTime;
            this.leaveMessageUsername.value = '';
            this.leaveMessageContent.value = '';
        },
        createLi: function createLi() {
            var createEle = this.createEle;
            var li = createEle('li', this.ol, '');
            var a = createEle('a', li, 'username');
            var p = createEle('p', li, 'leaveMessageContent');
            var span = createEle('span', li, 'time');
            var obj = {
                li: li,
                title: a,
                content: p,
                time: span
            };
            return obj;
        },
        createEle: function createEle(ele, parent, klassName) {
            var element = document.createElement(ele);
            element.className = klassName;
            parent.appendChild(element);
            return element;
        },
        createTime: function createTime(time) {
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var date = time.getDate();
            var hours = ("0" + time.getHours()).slice(-2);
            var min = ("0" + time.getMinutes()).slice(-2);
            var second = ("0" + time.getSeconds()).slice(-2);
            return year + '\u5E74' + month + '\u6708' + date + '\u65E5 ' + hours + ':' + min + ':' + second;
        }
    });

    controller.init(view, model);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var view = View('.swiper-container');
    var controller = Controller({
        swiper: null,
        swiperOptions: {
            loop: true,
            autoplay: {
                delay: 4000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        init: function init() {
            this.initSwiper();
        },
        initSwiper: function initSwiper() {
            this.swiper = new Swiper(view, this.swiperOptions);
        },
        bindEvents: function bindEvents() {
            var _this = this;

            window.selfSwiper = function () {
                return _this.swiper;
            };
        }
    });
    controller.init(view);

    // let controller = {
    //     view: null,
    //     swiper: null,
    //     swiperOptions: {
    //         loop: true,
    //         autoplay: {
    //             delay: 4000,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         }
    //     },
    //     init: function () {
    //         this.view = view
    //         this.initSwiper()
    //         this.bindEvents()
    //     },
    //     initSwiper: function () {
    //         this.swiper = new Swiper(view, this.swiperOptions)
    //     },
    //     bindEvents: function () {
    //         window.selfSwiper = () => {
    //             return this.swiper
    //         }
    //     }
    // }
    // controller.init(view)
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var view = View("#topNavBar");
    var controller = Controller({
        init: function init(view) {},
        bindEvents: function bindEvents() {
            var _this = this;

            setTimeout(function () {
                _this.normal();
            }, 2500);
        },
        normal: function normal() {
            this.view.classList.add('normally');
        }
    });
    controller.init(view);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    window.View = function (selector) {
        return document.querySelector(selector);
    };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    window.Model = function (options) {
        var Date = options.date;
        return {
            init: function init() {
                var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
                var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';
                AV.init({ appId: APP_ID, appKey: APP_KEY });
            },
            fetch: function fetch() {
                var date = new AV.Query(Date);
                return date.find(); //　Promise　对象
            },
            save: function save(dateObj) {
                // Promise 对象
                var xxx = AV.Object.extend(Date);
                var date = new xxx();
                return date.save(dateObj);
            }
        };
    };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js?url=false!../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js?url=false!../../node_modules/sass-loader/lib/loader.js!./main.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #efefef;\n  margin-bottom: 500px; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\nli {\n  list-style: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal; }\n\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n.loading-outer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #fff;\n  z-index: 2;\n  transition: all 1s; }\n  .loading-outer.active {\n    display: none; }\n  .loading-outer .loading {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .loading-outer .loading::before, .loading-outer .loading::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: none;\n      left: none;\n      background-color: #AFAFAF;\n      border-radius: 50%;\n      animation: loadingAnimation 1.8s linear infinite; }\n    .loading-outer .loading::after {\n      animation-delay: 0.9s; }\n\n@keyframes loadingAnimation {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    width: 80px;\n    height: 80px;\n    opacity: 0; } }\n\n.topNavBar {\n  padding: 20px 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  color: #b7b7b7;\n  transform: translateY(-50px);\n  transition: all 0.5s; }\n  .topNavBar.normally {\n    transform: translateY(0); }\n  .topNavBar.sticky {\n    padding: 10px 0;\n    background-color: #fff;\n    color: #3d4451;\n    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.3); }\n  .topNavBar.active nav {\n    padding: 8px 0 2px; }\n  .topNavBar .topNavBar-inner {\n    padding: 0 16px; }\n    .topNavBar .topNavBar-inner .logo {\n      float: left;\n      line-height: 40px;\n      font-size: 24px;\n      font-family: \"Arial Black\"; }\n      .topNavBar .topNavBar-inner .logo .bo {\n        margin-right: 2px;\n        color: #e8676b; }\n      .topNavBar .topNavBar-inner .logo .wen {\n        color: #9a9da2; }\n    .topNavBar .topNavBar-inner nav {\n      float: right;\n      padding: 8px 10px 2px;\n      transition: all 0.3s; }\n      .topNavBar .topNavBar-inner nav > ul {\n        margin: 0;\n        padding: 0; }\n        .topNavBar .topNavBar-inner nav > ul > li {\n          float: left;\n          margin: 0 15px;\n          position: relative; }\n          .topNavBar .topNavBar-inner nav > ul > li > a {\n            display: block;\n            font-weight: 600;\n            font-size: 12px;\n            color: inherit;\n            border-top: 3px solid transparent;\n            border-bottom: 3px solid transparent;\n            padding: 4px 0; }\n          .topNavBar .topNavBar-inner nav > ul > li.active > a::after,\n          .topNavBar .topNavBar-inner nav > ul > li.clickScrollActive > a::after {\n            content: '';\n            display: block;\n            background-color: #E8676B;\n            margin-top: 4px;\n            margin-right: 100%;\n            height: 3px;\n            width: 100%;\n            border-radius: 2px;\n            animation: topNavBarUnderLineAppear 0.2s; }\n          .topNavBar .topNavBar-inner nav > ul > li.active > .secondLevelMenu {\n            display: block;\n            margin-right: 0; }\n          .topNavBar .topNavBar-inner nav > ul > li > .secondLevelMenu {\n            display: none;\n            position: absolute;\n            top: 100%;\n            left: none;\n            right: 0;\n            padding: 10px 0;\n            background-color: #fff;\n            color: #2D3540;\n            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);\n            white-space: nowrap;\n            text-align: right;\n            margin-right: 100%;\n            margin-top: -7px;\n            font-size: 12px;\n            animation: secondLevelMenu 0.2s; }\n            .topNavBar .topNavBar-inner nav > ul > li > .secondLevelMenu > li {\n              padding: 8px 20px; }\n              .topNavBar .topNavBar-inner nav > ul > li > .secondLevelMenu > li:hover {\n                cursor: pointer;\n                background-color: #eee;\n                color: #E8676B; }\n\n@keyframes topNavBarUnderLineAppear {\n  0% {\n    width: 0%; }\n  100% {\n    width: 100%; } }\n\n@keyframes secondLevelMenu {\n  0% {\n    margin-right: 100%; }\n  100% {\n    margin-right: 0; } }\n\n.banner {\n  background: url(../dist/image/banner-bg.jpg) center center no-repeat;\n  background-size: cover;\n  height: 520px; }\n  .banner .mask {\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 520px; }\n\n[data-scroll] {\n  transform: translateY(200px);\n  transition: all 0.5s linear; }\n\n[data-scroll].scrollActive {\n  transform: translateY(0); }\n\nmain {\n  margin-top: -340px; }\n  main .userCard {\n    max-width: 930px;\n    margin: 0 auto;\n    background: #fff;\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3); }\n    main .userCard .profile {\n      padding: 60px 60px 20px 60px; }\n      main .userCard .profile > .picture {\n        float: left; }\n      main .userCard .profile > .information {\n        float: left;\n        margin-left: 90px;\n        width: 460px; }\n        main .userCard .profile > .information > .welcome {\n          display: inline-block;\n          padding: 3px 6px;\n          background: #e8676b;\n          color: #fff;\n          font-weight: 600;\n          position: relative; }\n          main .userCard .profile > .information > .welcome > .triangle {\n            display: block;\n            position: absolute;\n            top: 100%;\n            left: 4px;\n            border: 5px solid transparent;\n            width: 0;\n            border-top-color: #e8676b;\n            border-left-color: #e8676b; }\n        main .userCard .profile > .information > h1 {\n          margin: 30px 0 6px; }\n        main .userCard .profile > .information > hr {\n          border: none;\n          border-top: 1px solid #dedede;\n          margin: 20px 0; }\n        main .userCard .profile > .information > dl > dt {\n          float: left;\n          width: 30%;\n          padding: 5px 0;\n          font-weight: 600;\n          color: #333333; }\n        main .userCard .profile > .information > dl > dd {\n          float: left;\n          width: 70%;\n          padding: 5px 0;\n          color: #9da0a7; }\n    main .userCard .media {\n      padding: 15px 0;\n      background: #e8676b;\n      text-align: center; }\n      main .userCard .media > a {\n        display: inline-block;\n        padding: 6px;\n        border-radius: 50%;\n        margin: 0 30px; }\n        main .userCard .media > a:hover {\n          background: rgba(0, 0, 0, 0.1); }\n        main .userCard .media > a > .icon {\n          width: 30px;\n          height: 30px;\n          fill: #fff;\n          text-align: center; }\n  main .download-outer {\n    text-align: center;\n    margin: 30px 0 40px; }\n    main .download-outer .download {\n      border: 1px solid #cbcdcf;\n      display: inline-block;\n      vertical-align: top;\n      padding: 15px 55px;\n      color: #3d4451;\n      font-weight: 600;\n      border-radius: 2px;\n      transition: all 0.2s; }\n      main .download-outer .download:hover {\n        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2); }\n  main .selfIntroduction {\n    font-family: \"kaiti\";\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    line-height: 1.6; }\n\nsection {\n  max-width: 930px;\n  margin: 0 auto; }\n  section.scrollActive.skillsSection > .skills > li > .skillBar > .shillBar-inner {\n    transform: translateX(0%); }\n  section > .sectionTitle {\n    font-size: 34px;\n    font-weight: 600;\n    margin: 60px 0 25px;\n    text-align: center;\n    color: #3d4451;\n    line-height: 1.2; }\n  section.skillsSection > .skills {\n    background: #fff;\n    padding: 40px 50px 50px;\n    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2); }\n    section.skillsSection > .skills > li {\n      float: left;\n      width: 48%;\n      color: #3d4451;\n      font-size: 14px; }\n      section.skillsSection > .skills > li > .skillBar {\n        height: 5px;\n        background: #FAE1E1;\n        border-radius: 2px;\n        margin-top: 4px;\n        overflow: hidden; }\n        section.skillsSection > .skills > li > .skillBar > .shillBar-inner {\n          height: 100%;\n          background: #e8676b;\n          border-radius: 2px;\n          width: 90%;\n          transform: translateX(-100%);\n          transition: all 1s linear; }\n      section.skillsSection > .skills > li:nth-child(3), section.skillsSection > .skills > li:nth-child(4) {\n        margin: 40px 0; }\n      section.skillsSection > .skills > li:nth-child(even) {\n        float: right; }\n  section.portfolio {\n    text-align: center; }\n    section.portfolio > nav {\n      display: inline-block; }\n      section.portfolio > nav > ol {\n        display: inline-block;\n        margin-top: 2px; }\n        section.portfolio > nav > ol > li {\n          float: left;\n          font-size: 14px;\n          cursor: pointer;\n          padding: 0 6px; }\n          section.portfolio > nav > ol > li:nth-child(2) {\n            margin: 0 28px; }\n      section.portfolio > nav > .sliderBar {\n        height: 5px;\n        background: #fff;\n        border-radius: 4px;\n        transition: all 0.2s; }\n        section.portfolio > nav > .sliderBar > .sliderBar-inner {\n          height: 100%;\n          background: #E6686A;\n          border-radius: 4px;\n          transition: all 0.2s; }\n        section.portfolio > nav > .sliderBar > .sliderBarStateFirst {\n          width: 40px;\n          margin-left: 0; }\n        section.portfolio > nav > .sliderBar > .sliderBarStateSecond {\n          width: 60px;\n          margin-left: 58px; }\n        section.portfolio > nav > .sliderBar > .sliderBarStateThird {\n          width: 100px;\n          margin-left: 135px; }\n    section.portfolio > .swiper-container {\n      margin-top: 40px;\n      cursor: pointer; }\n      section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide {\n        position: relative; }\n        section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > img {\n          vertical-align: top;\n          width: 668px;\n          height: 501px; }\n        section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > .githubLink {\n          display: flex;\n          max-width: 400px;\n          position: absolute;\n          top: 100%;\n          left: 50%;\n          margin-left: -190px;\n          padding: 10px 16px;\n          border-radius: 6px;\n          background-color: rgba(255, 255, 255, 0.2);\n          transition: all 0.5s; }\n          section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > .githubLink.active {\n            top: 80%; }\n          section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > .githubLink svg {\n            fill: #E8676B;\n            width: 30px;\n            height: 30px;\n            padding: 9px;\n            border: 1px solid rgba(255, 255, 255, 0.4);\n            border-radius: 4px;\n            margin-right: 8px;\n            background-color: transparent;\n            transition: all 0.2s; }\n            section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > .githubLink svg:hover {\n              background-color: rgba(255, 255, 255, 0.2); }\n          section.portfolio > .swiper-container > .swiper-wrapper > .swiper-slide > .githubLink p {\n            font-size: 24px;\n            line-height: 50px;\n            font-weight: 600;\n            color: #3d4451; }\n      section.portfolio > .swiper-container > .page {\n        width: 44px;\n        padding: 10px;\n        background-color: #fff;\n        border-radius: 50%; }\n      section.portfolio > .swiper-container .swiper-button-next {\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23E8676B'%2F%3E%3C%2Fsvg%3E\"); }\n      section.portfolio > .swiper-container .swiper-button-prev {\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23E8676B'%2F%3E%3C%2Fsvg%3E\"); }\n  section.leaveMessage > .leaveMessageContent {\n    background-color: #fdfdfd;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: 0 -1px 6px rgba(26, 26, 26, 0.1); }\n    section.leaveMessage > .leaveMessageContent > .countMessage {\n      color: #3d4451;\n      font-weight: 600;\n      font-size: 18px;\n      border-bottom: 1px solid #F6F6F6;\n      margin: 0 20px;\n      padding: 20px 50px; }\n    section.leaveMessage > .leaveMessageContent > .messageList {\n      padding: 0 50px; }\n      section.leaveMessage > .leaveMessageContent > .messageList > li {\n        border-bottom: 1px solid #DDDDDD;\n        position: relative;\n        padding: 20px 20px; }\n        section.leaveMessage > .leaveMessageContent > .messageList > li:last-child {\n          border-bottom: none; }\n        section.leaveMessage > .leaveMessageContent > .messageList > li > .username {\n          color: #444;\n          cursor: pointer;\n          font-size: 18px;\n          line-height: 20px;\n          transition: all 0.2s; }\n          section.leaveMessage > .leaveMessageContent > .messageList > li > .username:hover {\n            color: #E8676B; }\n        section.leaveMessage > .leaveMessageContent > .messageList > li > .leaveMessageContent {\n          font-size: 16px;\n          line-height: 16px;\n          margin-top: 10px;\n          color: #555; }\n        section.leaveMessage > .leaveMessageContent > .messageList > li > .time {\n          position: absolute;\n          top: 25px;\n          right: 30px;\n          color: #999;\n          font-size: 14px; }\n    section.leaveMessage > .leaveMessageContent > form {\n      margin: 0 20px;\n      padding: 20px 50px 50px;\n      border-top: 1px solid #F6F6F6;\n      display: flex; }\n      section.leaveMessage > .leaveMessageContent > form > input {\n        padding: 6px 10px;\n        background-color: #F6F6F6;\n        color: #1a1a1a;\n        font-size: 16px;\n        line-height: 20px;\n        font-weight: 400;\n        outline: none;\n        border-radius: 4px;\n        border: 1px solid #ccc;\n        transition: all 0.2s; }\n      section.leaveMessage > .leaveMessageContent > form > .username {\n        max-width: 10%;\n        margin-right: 1%; }\n      section.leaveMessage > .leaveMessageContent > form > .content {\n        min-width: 75%; }\n      section.leaveMessage > .leaveMessageContent > form > .submit {\n        color: #FFF;\n        background-color: rgba(232, 103, 107, 0.5);\n        border: none;\n        margin-left: 10px;\n        font-size: 16px;\n        padding: 0 10px;\n        cursor: not-allowed; }\n        section.leaveMessage > .leaveMessageContent > form > .submit.active {\n          background-color: rgba(232, 103, 107, 0.9);\n          cursor: pointer; }\n      section.leaveMessage > .leaveMessageContent > form > .content:focus,\n      section.leaveMessage > .leaveMessageContent > form > .username:focus {\n        border: 1px solid #3d4451;\n        background-color: #fff; }\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);