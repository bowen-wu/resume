window.onload = function(){

    websiteLoading();
    let topNavBar = document.getElementById("topNavBar");
    let topNavBarLis = document.querySelectorAll('.topNavBar nav>ul>li');
    let topNavBarATag = document. querySelectorAll('.topNavBar nav>ul>li>a');
    for(let i=0, len=topNavBarLis.length; i<len; i++){
        topNavBarLis[i].onmouseenter = function(event){
            event.currentTarget.classList.add('active');
        }
        topNavBarLis[i].onmouseleave = function(event){
            event.currentTarget.classList.remove('active');
        }
        topNavBarLis[i].onclick = function(event){
            topNavBarClickEvent(event);
        }
    }
    
    
    window.onscroll = function () {
        var scrollHeight = window.scrollY;
        if (scrollHeight > 50) {
            topNavBar.classList.add('sticky');
        } else {
            topNavBar.classList.remove('sticky');
        }
        // scrollNavActiveFirst(scrollHeight);//第一种方案
        scrollNavActiveSecond(scrollHeight);//第二中方案
        

    }




    var portfolioAll = document.getElementById("portfolioAll");
    var portfolioFrame = document.getElementById("portfolioFrame");
    var portfolioProtogenesis = document.getElementById("portfolioProtogenesis");
    var portfolioBar = document.getElementById("portfolioBar");
    portfolioAll.onclick = function(){
        portfolioBar.className = "sliderBar-inner sliderBarStateFirst"
    }
    portfolioFrame.onclick = function(){
        portfolioBar.className = "sliderBar-inner sliderBarStateSecond"
    }
    portfolioProtogenesis.onclick = function(){
        portfolioBar.className = "sliderBar-inner sliderBarStateThird"
    }

    /********工具函数************/
    function websiteLoading() {
        var loading = document.getElementById("loading");
        setTimeout(function () {
            loading.classList.add('active');
        },2500)
    }

    function topNavBarClickEvent(event){
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

            var coords = {y:scrollHeight};
            var tween = new TWEEN.Tween(coords)
                .to({y: mainSectionOffsetTop - 100}, 1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y);
                })
                .start();
        }
    }
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
        let currentTopNavBarLi = document.querySelector('[href="#' + scrollEles[minIndex].id + '"]').parentNode;
        for (let i = 0, len = topNavBarLis.length; i < len; i++) {
            topNavBarLis[i].classList.remove('clickScrollActive');
        }
        currentTopNavBarLi.classList.add('clickScrollActive');
    }
    // 筛选元素节点
    function filterElementNode(nodes, num) {
        switch (num){
            case 'single':var node = null;break;
            case 'multi':var node = [];break;
        }
        for (let i = 0, len = nodes.length; i < len; i++) {
            if (nodes[i].nodeType === 1 && num === 'single') {
                node = nodes[i];
                break;
            } else if (nodes[i].nodeType === 1 && num === 'multi') {
                node.push(nodes[i]);
            }
        }
        return node;
    }
}