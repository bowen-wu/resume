!function () {
    let view = document.querySelector('section.leaveMessage')
    let model = {
        fetch: function () {
            let messages = new AV.Query('Message')
            return messages.find()  //　Promise　对象
        },
        save: function (username,content) {  // Promise 对象
            var Message = AV.Object.extend('Message')
            var message = new Message()
            return message.save({
                username: username,
                content: content
            })
        }
    }
    let controller = {
        view: null,
        model: null,
        ol: null,
        form: null,
        countMessage: null,
        content: null,
        submit: null,
        username: null,
        init: function () {
            this.view = view
            this.model = model
            this.ol = view.querySelector('#messageList')
            this.form = view.querySelector('section.leaveMessage form')
            this.countMessage = view.querySelector('#countMessage')
            this.submit = view.querySelector('#leaveMessageSubmit')
            this.content = view.querySelector('#leaveMessageContent')
            this.username = view.querySelector('#leaveMessageUsername')
            this.initAV()
            this.readingDate() // this.readingDate.call(this)
            this.bindEvents()  //this.bindEvents.call(this)
        },
        initAV: function () {
            var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
            var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        readingDate: function () {
            this.model.fetch().then((messages) => {
                this.countMessage.textContent = messages.length
                messages.forEach((message) => {
                    // let data = message.set('status', 1)
                    this.createLi(message)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault()
                this.submit.classList.remove('active')
                let username = view.querySelector('form input[name=username]').value
                let content = view.querySelector('form input[name=content]').value
                this.model.save(username,content).then((object) => {
                    let date = object.set('status', 1)
                    let countMessage = document.querySelector('#countMessage')
                    countMessage.textContent = parseInt(countMessage.textContent, 10) + 1
                    this.createLi(date)
                    document.querySelector('#leaveMessageUsername').value = ''
                    document.querySelector('#leaveMessageContent').value = ''
                })
            })
            this.content.addEventListener('input', () => {
                this.submitVerification()
            })
            this.username.addEventListener('input', () => {
                this.submitVerification()
            })
        },
        submitVerification: function(){
            if (this.content.value !== '' && this.username.value !== '') {
                this.submit['disabled'] = false
                this.submit.classList.add('active')
            } else {
                this.submit['disabled'] = true
                this.submit.classList.remove('active')
            }
        },
        createLi: function (object) {
            let li = this.createEle('li', this.ol, '')
            let svg = this.createEle('svg', li, 'icon')
            let use = this.createEle('use', svg, '')
            use.setAttribute('xlink:href', "#icon-username")
            let a = this.createEle('a', li, 'username')
            a.textContent = object.attributes.username
            let p = this.createEle('p', li, 'leaveMessageContent')
            p.textContent = object.attributes.content
            let span = this.createEle('span', li, 'time')
            this.writeTime(object, span)
        },
        createEle: function (ele, parent, klassName) {
            let element = document.createElement(ele)
            element.className = klassName
            parent.appendChild(element)
            return element
        },
        writeTime: function writeTime(object, span) {
            let year = object.updatedAt.getFullYear()
            let month = object.updatedAt.getMonth() + 1
            let date = object.updatedAt.getDate()
            let hourse = object.updatedAt.getHours()
            let minutes = object.updatedAt.getMinutes()
            let seconds = object.updatedAt.getSeconds()
            span.textContent = year + '年' + month + '月' + date + '日 ' + hourse + ':' + minutes + ':' + seconds
        },
    }

    controller.init(view,model)

}.call()