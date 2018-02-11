export default function() {
    let topNavBarLis = document.querySelectorAll('.topNavBar nav>ul>li');
    window.addEventListener('scroll', () => {
        var scrollHeight = window.scrollY;
        // scrollNavActiveFirst(scrollHeight);//第一种方案
        scrollNavActiveSecond(scrollHeight);//第二种方案
    })


    //滚动后导航高亮 -- 第一种方案
    function scrollNavActiveFirst(scrollHeight) {
        let scrollEles = document.querySelectorAll('[data-scroll]');
        for (let i = 0, len = scrollEles.length; i < len; i++) {
            let currentEleOffsetTop = scrollEles[i].offsetTop;
            let currentEleHeight = scrollEles[i].offsetHeight;
            if (scrollHeight > currentEleOffsetTop - 150 && scrollHeight < currentEleOffsetTop + currentEleHeight - 150) {
                let currentTopNavBarLi = document.querySelector('[href="#' + scrollEles[i].id + '"]').parentNode;
                for (let i = 0, len = topNavBarLis.length; i < len; i++) {
                    topNavBarLis[i].classList.remove('clickScrollActive');
                }
                currentTopNavBarLi.classList.add('clickScrollActive');
            }
        }
    }
    //滚动后导航高亮 -- 第二种方案
    function scrollNavActiveSecond(scrollHeight) {
        let scrollEles = document.querySelectorAll('[data-scroll]');
        let minIndex = 0;
        for (let i = 1, len = scrollEles.length; i < len; i++) {
            if (Math.abs(scrollEles[i].offsetTop - scrollHeight) < Math.abs(scrollEles[minIndex].offsetTop - scrollHeight)) {
                minIndex = i;
            }
        }
        scrollEles[minIndex].classList.add('scrollActive');
        let currentTopNavBarLi = document.querySelector('[href="#' + scrollEles[minIndex].id + '"]').parentNode;
        for (let i = 0, len = topNavBarLis.length; i < len; i++) {
            topNavBarLis[i].classList.remove('clickScrollActive');
        }
        currentTopNavBarLi.classList.add('clickScrollActive');
    }
}


