'use strict';

// 这是第一次写的，放弃

!function () {
    var view = View('section.leaveMessage');
    var model = Model({ date: 'Message' });

    var controller = {
        view: null,
        model: null,
        ol: null,
        form: null,
        countMessage: null,
        content: null,
        submit: null,
        username: null,
        init: function init() {
            this.view = view;
            this.model = model;
            this.ol = view.querySelector('#messageList');
            this.form = view.querySelector('section.leaveMessage form');
            this.countMessage = view.querySelector('#countMessage');
            this.submit = view.querySelector('#leaveMessageSubmit');
            this.content = view.querySelector('#leaveMessageContent');
            this.username = view.querySelector('#leaveMessageUsername');
            this.model.initAV();
            this.readingDate(); // this.readingDate.call(this)
            this.bindEvents(); //this.bindEvents.call(this)
        },
        readingDate: function readingDate() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                _this.countMessage.textContent = messages.length;
                messages.forEach(function (message) {
                    // let data = message.set('status', 1)
                    _this.createLi(message);
                });
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.form.addEventListener('submit', function (event) {
                event.preventDefault();
                _this2.submit.classList.remove('active');
                var username = view.querySelector('form input[name=username]').value;
                var content = view.querySelector('form input[name=content]').value;
                _this2.model.save({
                    'username': username,
                    'content': content
                }).then(function (object) {
                    var date = object.set('status', 1);
                    _this2.countMessage.textContent = parseInt(countMessage.textContent, 10) + 1;
                    _this2.createLi(date);
                    document.querySelector('#leaveMessageUsername').value = '';
                    document.querySelector('#leaveMessageContent').value = '';
                });
            });
            this.content.addEventListener('input', function () {
                _this2.submitVerification();
            });
            this.username.addEventListener('input', function () {
                _this2.submitVerification();
            });
        },
        submitVerification: function submitVerification() {
            if (this.content.value !== '' && this.username.value !== '') {
                this.submit['disabled'] = false;
                this.submit.classList.add('active');
            } else {
                this.submit['disabled'] = true;
                this.submit.classList.remove('active');
            }
        },
        createLi: function createLi(object) {
            var li = this.createEle('li', this.ol, '');
            var svg = this.createEle('svg', li, 'icon');
            var use = this.createEle('use', svg, '');
            use.setAttribute('xlink:href', "#icon-username");
            var a = this.createEle('a', li, 'username');
            a.textContent = object.attributes.username;
            var p = this.createEle('p', li, 'leaveMessageContent');
            p.textContent = object.attributes.content;
            var span = this.createEle('span', li, 'time');
            this.writeTime(object, span);
        },
        createEle: function createEle(ele, parent, klassName) {
            var element = document.createElement(ele);
            element.className = klassName;
            parent.appendChild(element);
            return element;
        },
        writeTime: function writeTime(object, span) {
            var year = object.updatedAt.getFullYear();
            var month = object.updatedAt.getMonth() + 1;
            var date = object.updatedAt.getDate();
            var hourse = object.updatedAt.getHours();
            var minutes = object.updatedAt.getMinutes();
            var seconds = object.updatedAt.getSeconds();
            span.textContent = year + '年' + month + '月' + date + '日 ' + hourse + ':' + minutes + ':' + seconds;
        }
    };

    controller.init(view, model);
}.call();