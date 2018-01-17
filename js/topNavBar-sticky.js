!function () {
    let view = document.getElementById("topNavBar")
    view.style.outline = '1px solid red'
    window.addEventListener('scroll', () => {
        var scrollHeight = window.scrollY;
        if (scrollHeight > 50) {
            view.classList.add('sticky');
        } else {
            view.classList.remove('sticky');
        }
    })
}.call()

