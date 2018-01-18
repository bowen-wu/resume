!function () {
    let view = document.querySelector('section.leaveMessage')


    var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
    var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    var messages = new AV.Query('Message');
    messages.find().then(function (messages) {
        let countMessage = document.querySelector('#countMessage')
        countMessage.textContent = messages.length
        messages.forEach(function (message) {
            let data = message.set('status', 1)
            createLi(data)
        });
    })

    let form = document.querySelector('section.leaveMessage form')
    submitEvent()
    function submitEvent() {
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let username = document.querySelector('section.leaveMessage form input[name=username]').value
            let content = document.querySelector('section.leaveMessage form input[name=content]').value
            var Message = AV.Object.extend('Message');
            var message = new Message();
            message.save({
                username: username,
                content: content
            }).then(function (object) {
                let date = object.set('status', 1)
                let countMessage = document.querySelector('#countMessage')
                countMessage.textContent = parseInt(countMessage.textContent, 10) + 1
                createLi(object)
                document.querySelector('section.leaveMessage form input[name=username]').value = ''
                document.querySelector('section.leaveMessage form input[name=content]').value = ''
            })
        })
    }

    function createLi(data) {
        let ol = document.querySelector('#messageList')
        let li = document.createElement('li')
        ol.appendChild(li)
        let svg = document.createElement('svg')
        svg.className = 'icon'

        let use = document.createElement('use')
        use.setAttribute('xlink:href', "#icon-username")
        svg.appendChild(use)
        li.appendChild(svg)
        let a = document.createElement('a')
        a.textContent = data.attributes.username
        a.className = 'username'
        li.appendChild(a)
        let p = document.createElement('p')
        p.textContent = data.attributes.content
        p.className = 'leaveMessageContent'
        li.appendChild(p)
        let span = document.createElement('span')
        let year = data.updatedAt.getFullYear()
        let month = data.updatedAt.getMonth() + 1
        let date = data.updatedAt.getDate()
        let hourse = data.updatedAt.getHours()
        let minutes = data.updatedAt.getMinutes()
        let seconds = data.updatedAt.getSeconds()
        span.textContent = year + '年' + month + '月' + date + '日 ' + hourse + ':' + minutes + ':' + seconds
        span.className = 'time'
        li.appendChild(span)
    }

    let username = document.querySelector('#leaveMessageUsername')
    let content = document.querySelector('#leaveMessageContent')
    let submit = document.querySelector('#leaveMessageSubmit')
    content.addEventListener('focus', (event) => {
        event.currentTarget.classList.add('active')
        let value = content.value
        if (value === '') {
            submit.classList.add('deactive')
        } else {
            submit.classList.add('active')
        }
    })
    content.addEventListener('input', (event) => {
        let value = content.value
        if (value !== '') {
            submit.classList.remove('deactive')
            submit.classList.add('active')
        } else {
            submit.classList.remove('active')
            submit.classList.add('deactive')
        }
    })
    content.addEventListener('blur', (event) => {
        let value = content.value
        if (value !== '') {
            submit.addEventListener('click', () => {
                submitEvent()
                content.classList.remove('active')
                submit.classList.remove('active', 'deactive')
            })
        } else {
            event.currentTarget.classList.remove('active')
            submit.classList.remove('active', 'deactive')
        }
    })

}.call()