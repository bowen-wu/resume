window.onload = function(){

    websiteLoading();
    window.onscroll = function(){
        var topNavBar = document.getElementById("topNavBar");
        var scrollHeight = window.scrollY;
        if(scrollHeight > 50){
            topNavBar.classList.add('active');
        }else{
            topNavBar.classList.remove('active');
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
        })
    }
}