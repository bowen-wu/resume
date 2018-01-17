!function () {
    let view = document.querySelector('.topNavBar nav')
    view.style.outline = '1px solid red'
    let topNavBarLis = view.querySelectorAll('.topNavBar nav > ul > li')
    let topNavBarATag = view.querySelectorAll('.topNavBar nav > ul > li > a')
    for (let i = 0, len = topNavBarLis.length; i < len; i++) {
        topNavBarLis[i].onmouseenter = function (event) {
            event.currentTarget.classList.add('active');
        }
        topNavBarLis[i].onmouseleave = function (event) {
            event.currentTarget.classList.remove('active');
        }
        topNavBarLis[i].onclick = function (event) {
            topNavBarClickEvent(event);
        }
    }

    function topNavBarClickEvent(event) {
        event.preventDefault();
        let scrollHeight = window.scrollY;
        let topNavBarATagClickHref = event.target.getAttribute('href');
        let mainSection = document.querySelector(topNavBarATagClickHref);
        if (mainSection !== null) {
            let mainSectionOffsetTop = mainSection.offsetTop;
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);

            var coords = { y: scrollHeight };
            var tween = new TWEEN.Tween(coords)
                .to({ y: mainSectionOffsetTop - 100 }, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y);
                })
                .start();
        }
    }
}.call()

