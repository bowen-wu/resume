'use strict';

!function () {
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
}.call();