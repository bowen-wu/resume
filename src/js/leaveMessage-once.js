export default function () {
    let view = View('section.leaveMessage')

    let model = Model({date: 'Message'})

    let controller = Controller({
        countMessages: null,
        ol: null,
        form: null,
        leaveMessageUsername: null,
        leaveMessageContent: null,
        leaveMessageSubmit: null,
        dateObj: null,
        readingData: function () {
            this.model.fetch().then((messages) => {
                this.countMessages.textContent = messages.length
                messages.forEach((message) => {
                    this.dateObj = message
                    this.writePages()
                })
            })
        },
        init: function(){
            this.countMessages = view.querySelector('#countMessage')
            this.ol = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.leaveMessageUsername = view.querySelector('#leaveMessageUsername')
            this.leaveMessageContent = view.querySelector('#leaveMessageContent')
            this.leaveMessageSubmit = view.querySelector('#leaveMessageSubmit')
            this.readingData() // this.readingData.call(this)
        },
        bindEvents: function () {
            this.leaveMessageUsername.addEventListener('input', () => {
                this.submitVerification()
            })
            this.leaveMessageContent.addEventListener('input', () => {
                this.submitVerification()
            })
            this.form.addEventListener('submit', (event) => {
                event.preventDefault()
                this.leaveMessageSubmit.classList.remove('active')
                let username = this.view.querySelector('#leaveMessageUsername').value
                let content = this.view.querySelector('#leaveMessageContent').value
                this.model.save({
                    'username': username,
                    'content': content
                }).then((object) => {
                    this.countMessages.textContent = parseInt(this.countMessages.textContent, 10) + 1
                    this.dateObj = object
                    this.writePages()
                })
            })
        },
        submitVerification: function () {
            if (this.leaveMessageUsername.value !== '' && this.leaveMessageContent.value !== '') {
                this.leaveMessageSubmit['disabled'] = false
                this.leaveMessageSubmit.classList.add('active')
            } else {
                this.leaveMessageSubmit['disabled'] = true
                this.leaveMessageSubmit.classList.remove('active')
            }
        },
        writePages: function () {
            let message = this.dateObj
            let liObj = this.createLi() //this.createLi.call(this)
            liObj.title.textContent = message.attributes.username
            liObj.content.textContent = message.attributes.content
            let createTime = this.createTime(message.updatedAt)
            liObj.time.textContent = createTime
            this.leaveMessageUsername.value = ''
            this.leaveMessageContent.value = ''
        },
        createLi: function () {
            let createEle = this.createEle
            let li = createEle('li', this.ol, '')
            let a = createEle('a', li, 'username')
            let p = createEle('p', li, 'leaveMessageContent')
            let span = createEle('span', li, 'time')
            let obj = {
                li: li,
                title: a,
                content: p,
                time: span
            }
            return obj
        },
        createEle: function (ele, parent, klassName) {
            let element = document.createElement(ele)
            element.className = klassName
            parent.appendChild(element)
            return element
        },
        createTime: function (time) {
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let date = time.getDate()
            let hours = ("0" + time.getHours()).slice(-2)
            let min = ("0" + time.getMinutes()).slice(-2)
            let second = ("0" + time.getSeconds()).slice(-2)
            return `${year}年${month}月${date}日 ${hours}:${min}:${second}`
        }
    })

    controller.init(view,model)
    
}