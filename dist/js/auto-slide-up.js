'use strict';

!function () {
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
}.call();