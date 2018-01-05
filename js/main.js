window.onload = function(){

    websiteLoading();
    let topNavBar = document.getElementById("topNavBar");
    let topNavBarLis = document.querySelectorAll('.topNavBar nav>ul>li');
    let topNavBarATag = document. querySelectorAll('.topNavBar nav>ul>li>a');
    for(let i=0, len=topNavBarLis.length; i<len; i++){
        topNavBarLis[i].onmouseenter = function(event){
            event.currentTarget.classList.add('mouseEventActive');
        }
        topNavBarLis[i].onmouseleave = function(event){
            event.currentTarget.classList.remove('mouseEventActive');
        }
        topNavBarLis[i].onclick = function(event){
            event.preventDefault();
            let siblings = event.currentTarget.parentNode.childNodes;
            let allEleChilds = filterElementNode(siblings,'multi');
            for(let i=0,len=allEleChilds.length;i<len;i++){
                allEleChilds[i].classList.remove("clickEventActive");
            }
            event.currentTarget.classList.add("clickEventActive");
            let topNavBarATagClick = filterElementNode(event.currentTarget.childNodes,'single');
            let topNavBarATagClickHref = topNavBarATagClick.getAttribute('href');
            let mainSection = document.querySelector(topNavBarATagClickHref);
            if (mainSection !== null) {
                let mainSectionOffsetTop = mainSection.offsetTop;
                window.scrollTo(0, mainSectionOffsetTop - 100);
            }else {
                return;
            }
        }
    }
    
    window.onscroll = function () {
        var scrollHeight = window.scrollY;
        if (scrollHeight > 50) {
            topNavBar.classList.add('active');
        } else {
            topNavBar.classList.remove('active');
        }
        let scrollEles = document.getElementsByClassName('scrollClass');
        for(let i=0,len=scrollEles.length;i<len;i++){
            let currentEle = scrollEles[i];
            let currentEleOffsetTop = currentEle.offsetTop;
            let currentEleHeight = currentEle.offsetHeight;
            if(scrollHeight > currentEleOffsetTop-100 || scrollHeight > currentEleOffsetTop + currentEleHeight-100){
                for(let i=0,len=topNavBarATag.length;i<len;i++){
                    let topNavBarATagHrefScroll = topNavBarATag[i].getAttribute('href');
                    if('#' + currentEle.id === topNavBarATagHrefScroll){
                        for(let i=0,len=topNavBarLis.length;i<len;i++){
                            topNavBarLis[i].classList.remove('scrollEventActive');
                        }
                        topNavBarATag[i].parentNode.classList.add('scrollEventActive');
                    }
                }
            }else{
                
            }
        }
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
    // 筛选单个元素节点
    function filterElementNode(nodes,num){
        if(num === 'single'){
            var node=null;
            for(let i=0, len=nodes.length;i<len;i++){
                if(nodes[i].nodeType === 1){
                    node = nodes[i];
                    break;
                }
            }
        }
        if(num === 'multi'){
            var node=[];
            for(let i=0, len=nodes.length;i<len;i++){
                if(nodes[i].nodeType === 1){
                    node.push(nodes[i]);
                }
            }
        }
        return node;
    }
}