window.onload = function(){

    websiteLoading();
    var topNavBar = document.getElementById("topNavBar");
    window.onscroll = function(){
        var scrollHeight = window.scrollY;
        if(scrollHeight > 50){
            topNavBar.classList.add('active');
        }else{
            topNavBar.classList.remove('active');
        }
    }
    let topNavBarLi = document.querySelectorAll('.topNavBar nav>ul>li');
    let topNavBarUl = document.querySelector('.topNavBar nav>ul');
    topNavBarUl.onclick = function(event){
        event.preventDefault();
        let triggerEle = event.target;
        let getHref = triggerEle.getAttribute('href');
        let triggerEleTarget = document.querySelector(getHref);
        let triggerEleTargetOffsetTop = triggerEleTarget.offsetTop;
        window.scrollTo(0,triggerEleTargetOffsetTop-80);
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
        })
    }
}