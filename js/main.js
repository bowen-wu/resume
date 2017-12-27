window.onload = function(){
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
}