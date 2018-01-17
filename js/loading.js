!function () {
    var view = document.getElementById("loading");
    view.style.outline = '1px solid red'
    setTimeout(function () {
        view.classList.add('active');
    }, 2500)
}.call()
